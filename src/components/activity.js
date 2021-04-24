import React, { useState } from 'react';
import { studentsActivitiAPI } from '../api/api';
import style from './activity.module.css'



const CreateForm = (props) => {
    const SaveNewStudent = () => {
        studentsActivitiAPI.updateStudent(createdStudentId,createdStudentActivity)
        props.DataMethod()
        props.ChangeFlagOnFalse()
    } 
   const [createdStudentId,setCreatedStudentId] = useState('')
    const [createdStudentActivity,setCreatedStudentActivity] = useState('')
    return (
        <div>
            <input 
                type="text"
                onChange = {(e) => {
                    setCreatedStudentId(e.target.value)
                }}
            />

            <input 
                type="text"
                onChange = {(e) => {
                    setCreatedStudentActivity(e.target.value)
                }}
            />
            <button onClick = {SaveNewStudent}>Save</button>
        </div>
    )
}

const CreateReductForm = (props) => {
    const SaveStudentActivity = () => {
        studentsActivitiAPI.updateActivity(createdStudentActivity,props.id)
        props.DataMethod()
        console.log(props.DataMethod)
        props.ChangeReductFlagOnFalse()
    } 

    const [createdStudentActivity,setCreatedStudentActivity] = useState('')
    return (
        <div>
            <input
                type="text"
                onChange = {(e) => {
                    setCreatedStudentActivity(e.target.value)
                }}
             />
            <button onClick ={SaveStudentActivity}>Save</button> 
        </div>
    )
}


const Activity = (props) => {
    const ChangeFlagOnFalse = () => {
        setFlag(false)
    }
    const ChangeReductFlagOnFalse = () => {
        setReductFlag(false)
    }

    const ChangeFlag = () => {
        setFlag(true)
    }
    const ReductFlag = () => {
        setReductFlag(true)
    }

    const [CreateFormFlag,setFlag] = useState(false)
    const [CreateReductFlag,setReductFlag] = useState(false)
    const [StudData,getStudData] = useState([])
    const [flagg,flaggg] = useState(true)

    const Data = () => { 
        debugger;
        studentsActivitiAPI.getStudents().then(response => {
            getStudData(response)
            flaggg(false)
        }); 
    }

    const deleteStudent = (id) => {
        studentsActivitiAPI.deleteStudent(id)
    }

    return (
        <div className={style.Table}>
            {flagg?Data():null}
            <div>
                <h3>
                    Student Name (ID)
                </h3>
                {
                    StudData.map((val) => {
                        return (
                            <div><p>{val.Student_Name}</p></div>
                        )
                    })
                }
            </div>
            <div className={style.Activity}>
                <h3>
                    Activity
                </h3>
                {
                    StudData.map((val) => {
                        return (
                            <div>
                                <div><p>{val.Activity}</p></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.Do}>
                {
                    StudData.map((val) => {
                    return (
                        <div>
                            {   
                                CreateReductFlag 
                                ? <CreateReductForm
                                        id = {val.Student_Name} 
                                        ChangeReductFlagOnFalse = {ChangeReductFlagOnFalse}
                                        DataMethod = {Data}
                                    />
                                : <button onClick={ReductFlag}>Reduct</button>
                            }
                            <button onClick = {() => {
                                deleteStudent(val.Student_Name)
                                Data()
                            }}>Delete</button>
                        </div>
                        )
                })
                }
            </div>
            <div className = {style.Create}>
                { 
                 CreateFormFlag 
                    ? <CreateForm DataMethod = {Data} ChangeFlagOnFalse = {ChangeFlagOnFalse} />
                    : <button onClick={ChangeFlag}>Create</button>
                }
            </div>
        </div>
    )
}

export default Activity;