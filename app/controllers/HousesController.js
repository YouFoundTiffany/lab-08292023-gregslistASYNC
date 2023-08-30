import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"



function _drawHouses() {
    console.log('draw houses')
}

export class HousesController {
    constructor() {
        console.log('hello from houses controller')
        this.getHouses()
        AppState.on('houses', _drawHouses)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error.message)
        }
    }


}