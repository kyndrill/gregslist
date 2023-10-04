import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawHouses() {
  let house = AppState.houses
  let content = ``
  house.forEach(house => content += house.HouseCard)
  setHTML("house", content)
}

export class HousesController {
  constructor() {
    console.log("Houses Controller loaded!")
    _drawHouses()

    AppState.on('houses', _drawHouses)
  }


  createHouse(event) {
    try {
      event.preventDefault()

      const form = event.target

      const houseData = getFormData(form)

      houseData.hasGarage = houseData.hasGarage == "on"
      houseData.hasBasement = houseData.hasBasement == "on"
      houseData.hasHoA = houseData.hasHoA == "on"

      console.log('Creating home!', houseData);

      housesService.createHouse(houseData)

      form.reset()

    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

}