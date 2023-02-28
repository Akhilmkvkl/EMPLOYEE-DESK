import axios from "axios";

export const EmployeeInstance = axios.create({
    baseURL: "http://localhost:5000/Employee"
})