import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getAllEmployees(jwtToken) {
    return axios.get(`${baseUrl}admin/employees`, { headers: { 'Authorization': "Bearer " + jwtToken } });

}

export function deleteEmployee(employeeId, jwtToken) {
    return axios.delete(`${baseUrl}admin/employees/` + employeeId, { headers: { 'Authorization': "Bearer " + jwtToken } });
}

export function addEmployee(registerData, jwtToken) {
    let registerEmployeeBody = {
        "email": registerData.email,
        "password": registerData.password,
        "name": registerData.name,
        "surname": registerData.surname,
        "phoneNr": registerData.phoneNr,
        "birthdate": registerData.birthDate,
        "address": registerData.address,
        "position": registerData.position,
        "salary": registerData.salary
    };
    return axios.post(`${baseUrl}admin/employees/`, registerEmployeeBody, { headers: { 'Authorization': "Bearer " + jwtToken } });
}

export function getCurrentSchedules(jwtToken) {
    return axios.get(`${baseUrl}admin/employees/schedules/current`, { headers: { 'Authorization': "Bearer " + jwtToken } });
}

export function deleteSchedule(scheduleId, jwtToken) {
    return axios.delete(`${baseUrl}admin/employees/schedules/` + scheduleId, { headers: { 'Authorization': "Bearer " + jwtToken } });
}

export function createSchedule(scheduleData, jwtToken) {
    let body = {
        "employeeId": scheduleData.employeeId,
        "interval": {
            "startDate": scheduleData.date + 'T' + scheduleData.startHour,
            "endDate": scheduleData.date + 'T' + scheduleData.endHour
        }
    }
    return axios.post(`${baseUrl}admin/employees/schedules`, body, { headers: { 'Authorization': "Bearer " + jwtToken } });
}