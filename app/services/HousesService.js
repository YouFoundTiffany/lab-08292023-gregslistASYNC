import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"




class HousesService {

    async getHouses() {
        const response = await api.get('api/houses')
        console.log(response.data)
        const mappedHouse = response.data.map(dataObj => new House(dataObj))
        AppState.houses = mappedHouse
    }

}


export const housesService = new HousesService()