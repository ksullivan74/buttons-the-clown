import { buttonsClownService } from "./buttonsClownService.js"
import { fetchReservations, fetchClowns, fetchPartyAssignments } from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(
        () => fetchClowns()
    )
    .then (
        () => fetchPartyAssignments()
    )
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