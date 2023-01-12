
import { City, ListResponse } from "app/models";
import axiosClient from "./axiosClient"

const cityApi = {
    getAll(): Promise<ListResponse<City>> {
        const url = '/cities'
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 20,
            }
        });
    }
}
export default cityApi;