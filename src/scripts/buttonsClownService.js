import { reservationForm } from "./reservationForm.js"
import { partyAssignments } from "./partyAssignments.js"

export const buttonsClownService = () =>{
    return `
    <h1>Buttons Clown Service</h1>
        <section>
        ${reservationForm()}
        </section>
    <h2>Reservations</h2>
        <section>
        ${partyAssignments()}
        </section>
    `
}