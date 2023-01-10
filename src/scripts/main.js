import { buttonsClownService } from "./buttonsClownService.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = buttonsClownService()
}

render ()

document.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)