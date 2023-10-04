import { generateId } from "../utils/GenerateId.js"

export class House {
  /**
   * @param {{ year: number; name: string; bedrooms: number; bathrooms: number; hasGarage: boolean, hasBasement: boolean, hasHoA: boolean, sqft: number; price: number; location: string, description: string; imgUrl: string; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.hasGarage = data.hasGarage
    this.hasBasement = data.hasBasement
    this.hasHoA = data.hasHoA
    this.sqft = data.sqft
    this.price = data.price
    this.location = data.location
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get HouseCard() {
    return `
  <div class="col-3 m-5 house-card shadow fw-bold">
    <div class="m-3">
      <img
        src="${this.imgUrl}"
        alt="house picture" class="house-img">
    </div>
    <p class="text-center fs-4 mb-2">${this.name}</p>
    <div class="d-flex justify-content-between">
      <div class="p-1">
        <p>Built in: ${this.year}</p>
        <p>Bedrooms: ${this.bedrooms}</p>
        <p>Bathrooms: ${this.bathrooms}</p>
      </div>
      <div class="house-small-box p-1">
        <p>Garage: ${this.hasGarage ? "Yes" : "No"}</p>
        <p>Basement: ${this.hasBasement ? "Yes" : "No"}</p>
        <p>HOA: ${this.hasHoA ? "Yes" : "No"}</p>
      </div>
    </div>
    <div class="mt-2">
      <p>Square Footage: ${this.sqft}</p>
      <p>Price: $${this.price}</p>
      <p>Location: ${this.location}</p>
      <p>Description: ${this.description}</p>
    </div>
  </div>`

  }

}