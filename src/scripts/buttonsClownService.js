import { reservationForm } from "./reservationForm.js"

export const buttonsClownService = () =>{
    return `
    <h1>Buttons Clown Service</h1>
        <section>
        ${reservationForm()}
        </section>
    `
}