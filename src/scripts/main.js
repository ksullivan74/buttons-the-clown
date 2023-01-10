import { buttonsClownService } from "./buttonsClownService.js"
import { fetchReservations } from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(
        () => {
        mainContainer.innerHTML = buttonsClownService()
        }
    )
}

render ()

document.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)