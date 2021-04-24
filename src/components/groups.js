import React, { useEffect, useState } from 'react';
import { groupsAPI } from '../api/api';
import style from './groups.module.css'


const Form = (props) => {
    const [groupInfomationNumber, setgroupInfomationNumber] = useState('')
    const [groupInfomationDepartment, setgroupInfomationDepartment] = useState('')
    const [groupInfomationYear, setgroupInfomationYear] = useState('')

    const saveReductetGroup = () => {
        groupsAPI.updateGroup(props.groupID,groupInfomationNumber,groupInfomationDepartment,groupInfomationYear)
        props.groups()
        props.changeFlagFuncOnFalse()
        console.log(groupInfomationNumber,groupInfomationDepartment,groupInfomationYear)
        console.log(props.groupID)
    }

    return (
    <div>    
        Group_Number <input type="text"  onChange = {(e) => {
            setgroupInfomationNumber(e.target.value)
        }}/>
        Department_ID <input type="text"  onChange = {(e) => {
            setgroupInfomationDepartment(e.target.value)
        }}/> 
        Year_Of_Create <input type="text" onChange = {(e) => {
            setgroupInfomationYear(e.target.value)
        }}/> 
        <p><button onClick = {saveReductetGroup}>Save</button></p>
    </div>    
    )

}

const CreateGroupForm = (props) => {
    const [groupInfomationNumber, setgroupInfomationNumber] = useState('')
    const [groupInfomationDepartment, setgroupInfomationDepartment] = useState('')
    const [groupInfomationYear, setgroupInfomationYear] = useState('')

    const saveCreatedGroup = () => {
        groupsAPI.createGroup(groupInfomationNumber,groupInfomationDepartment,groupInfomationYear)
        props.groups()
        props.changeCreateFlagFuncOnFalse()
        console.log(groupInfomationNumber,groupInfomationDepartment,groupInfomationYear)
    }

    return (
    <div>    
        <p>Group_Number</p> <input type="text"  onChange = {(e) => {
            setgroupInfomationNumber(e.target.value)
        }}/>
        <p>Department_ID</p> <input type="text"  onChange = {(e) => {
            setgroupInfomationDepartment(e.target.value)
        }}/> 
        <p>Year_Of_Create</p> <input type="text" onChange = {(e) => {
            setgroupInfomationYear(e.target.value)
        }}/> 
        <p><button onClick = {saveCreatedGroup}>Save</button></p>
    </div>    
    )

}

const Groups = (props) => {
    const [groupInfomation, setgroupInfomation] = useState([])

    const groups = () => {
            groupsAPI.getGroups().then((response) => {
            setgroupInfomation(response)
        })
    }
    
    const deleteGroup = (id) => {
        groupsAPI.deleteGroup(id)
        groupsAPI.getGroups().then((response) => {
            setgroupInfomation(response)
        })
    }

    const [groupID,setGroupID]= useState('')  

    const [formFlag,setFormFlag] = useState(false)
    const changeFlagFunc = (GroupID) => {
        setFormFlag(true)
        setGroupID(GroupID)
    }

    const changeFlagFuncOnFalse = () => {
        setFormFlag(false)
    }


    const [formFlagCreate,setFormCreateFlag] = useState(false)
    const changeCreateFlagFunc = () => {
        setFormCreateFlag(true)
    }
    const changeCreateFlagFuncOnFalse = () => {
        setFormCreateFlag(false)
    }

    return (
        <div className ={style.Table}>
            <div>
                <p>Group_Number</p>
                {groupInfomation.map((val) => {
                    return <p key={val.Group_ID}>
                            {val.Group_Number}
                        </p>
                })}
            </div>
            <div>
            <p>Department_ID</p>
            {groupInfomation.map((val) => {
                    return <p key={val.Group_ID}>
                            {val.Department_ID}
                        </p>
                })}
            </div>
            <div>
                <p>Year_Of_Create</p>
                {groupInfomation.map((val) => {
                    return <p key={val.Group_ID}>
                            {val.Year_Of_Create}
                            <button onClick={() => {deleteGroup(val.Group_ID) } }>Delete</button>
                            <button onClick={() => {changeFlagFunc(val.Group_ID) } }>Reduct</button>
                        </p>
                })}
            </div>
            {
                formFlag
                ?<Form 
                    changeFlagFuncOnFalse = {changeFlagFuncOnFalse}
                    groupID = {groupID}
                    groups ={groups}
                    />
                : null
            }
            {
                formFlagCreate
                ?<CreateGroupForm 
                    changeCreateFlagFuncOnFalse = {changeCreateFlagFuncOnFalse}
                    groups ={groups}
                    />
                : null
            }
            <button className={style.CreateButton} onClick ={changeCreateFlagFunc}>Create Group</button>
            <div><button onClick = {groups}>Show Groups</button></div>
        </div>
    )
}

export default Groups;