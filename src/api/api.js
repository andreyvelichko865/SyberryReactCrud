import * as axios from "axios";
 

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
});


export const studentsActivitiAPI = {
     getStudents() {
        return instance.get(`/activity`)
            .then(response => {
                return response.data;
            });
    },
    updateStudent(name,activityName) {
        return instance.post(`activity`,{
            name:name,
            activityName:activityName
        })
    },
    deleteStudent(studentID) {
        return instance.delete(`activity/${studentID}`)
    },
    updateActivity(activityName,id) {
        return instance.put(`activity`, { 
            activityName: activityName,
            id:id
         });
    }
}

export const groupsAPI = {
    getGroups() {
       return instance.get(`/groups`)
           .then(response => {
               return response.data;
           });
   },
   createGroup(Group_Number,Department_ID,Year_Of_Create) {
       return instance.post(`group`,{
            Group_Number:Group_Number,
            Department_ID:Department_ID,
            Year_Of_Create:Year_Of_Create,
       })
   },
   deleteGroup(groupID) {
       return instance.delete(`group/${groupID}`)
   },
   updateGroup(Group_ID,Group_Number,Department_ID,Year_Of_Create) {
       return instance.put(`group`, { 
            Group_ID: Group_ID,
            Group_Number:Group_Number,
            Department_ID:Department_ID,
            Year_Of_Create:Year_Of_Create,
        });
   }
}

export const ratingAPI = {
    getRating() {
       return instance.get(`/rating`)
           .then(response => {
               return response.data;
           });
   },
   updateRating(name,activityName) {
       return instance.post(`rating`,{
           name:name,
           activityName:activityName
       })
   },
   deleteRating(studentID) {
       return instance.delete(`rating/${studentID}`)
   },
   updateRating(activityName,id) {
       return instance.put(`rating`, { 
           activityName: activityName,
           id:id
        });
   }
}

export const studentsAPI = {
    getStudents() {
       return instance.get(`/student`)
           .then(response => {
               return response.data;
           });
   },
   updateStudent(name,activityName) {
       return instance.post(`student`,{
           name:name,
           activityName:activityName
       })
   },
   deleteStudent(studentID) {
       return instance.delete(`student/${studentID}`)
   },
   updateActivity(activityName,id) {
       return instance.put(`student`, { 
           activityName: activityName,
           id:id
        });
   }
}

export const subjectsAPI = {
    getSubjects() {
       return instance.get(`/subjects`)
           .then(response => {
               return response.data;
           });
   },
   updateSubjects(name,activityName) {
       return instance.post(`subjects`,{
           name:name,
           activityName:activityName
       })
   },
   deleteSubjects(studentID) {
       return instance.delete(`subjects/${studentID}`)
   },
   updateSubjects(activityName,id) {
       return instance.put(`subjects`, { 
           activityName: activityName,
           id:id
        });
   }
}

export const departmentAPI = {
    getDepartment() {
       return instance.get(`/universityDepartment`)
           .then(response => {
               return response.data;
           });
   },
   updateDepartment(name,activityName) {
       return instance.post(`universityDepartment`,{
           name:name,
           activityName:activityName
       })
   },
   deleteDepartment(studentID) {
       return instance.delete(`universityDepartment/${studentID}`)
   },
   updateDepartment(activityName,id) {
       return instance.put(`universityDepartment`, { 
           activityName: activityName,
           id:id
        });
   }
}
