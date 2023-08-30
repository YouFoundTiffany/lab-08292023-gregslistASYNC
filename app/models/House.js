import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.desc = data.description
        this.creatorId = data.creator.id
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.__v = data.__v
        this.creatorId = data.creator.id
        this.creatorName = data.creator.name
        this.creatorPicture = data.creator.picture
    }
}




