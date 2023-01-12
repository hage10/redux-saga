
import { Student, ListResponse, ListParams } from "app/models";
import axiosClient from "./axiosClient"

const studenApi = {
    getAll(params: ListParams): Promise<ListResponse<Student>> {
        const url = '/students'
        return axiosClient.get(url, { params });
    },
    getById(id: string): Promise<any> {
        const url = `/student/${id}`
        return axiosClient.get(url);
    },
    add(data: Student): Promise<Student> {
        const url = '/students'
        return axiosClient.post(url, data);
    },
    update(data: Student): Promise<Student> {
        const url = '/students'
        return axiosClient.put(url, data);
    },
    remove(id: string): Promise<any> {
        const url = `/student/${id}`
        return axiosClient.delete(url);
    }
}
export default studenApi;