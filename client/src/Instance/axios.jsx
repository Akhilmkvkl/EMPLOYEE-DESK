import axios from "axios";

export const EmployeeInstance = axios.create({
    baseURL: "/Employee"
})