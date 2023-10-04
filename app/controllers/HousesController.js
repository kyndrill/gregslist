import { AppState } from "../AppState.js"
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
  }
}