import { getReservations, getClowns, sendPartyAssignments  } from "./dataAccess.js";

export const partyAssignments = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    return `
        <ul>
            ${
                reservations.map(
                    (reservation) => {
                        return`
                        <li id = "${reservation.id}">${reservation.parentName} has booked a clown</li>`
                    }
                )
            }
        </ul>
    `
}