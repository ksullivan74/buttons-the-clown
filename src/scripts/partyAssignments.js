import { getReservations, getClowns, denyRequest, sendPartyAssignments  } from "./dataAccess.js";

export const partyAssignments = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    return `
        <ul>
            ${
                reservations.map(
                    (reservation) => {
                        return`
                        <li>
                        ${reservation.parentName} has booked a clown for ${reservation.reservationDate}
                        <button class = "request_delete"
                        id = "reservation--${reservation.id}">Deny</button>
                        <select class = "clowns" id = "clowns">
                           <option value="0">Choose</option>
                            ${
                                clowns.map(
                                    clown => {
                                      return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                                    }
                                ).join("")
                            }
                        </select>
                        </li>`
                    }
                )
            }
        </ul>
    `
}


document.addEventListener("click", click => {
        if(click.target.id.startsWith("reservation--")) {
            const [,reservationId] = click.target.id.split("--")
            denyRequest(parseInt(reservationId))
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId,clownId] = event.target.value.split("--")

            const selectedReservation = parseInt(reservationId)
            const selectedClown = parseInt(clownId)
            const date_completed = Date.now()

            const partyAssignments = {
                reservationId: selectedReservation,
                clownId: selectedClown,
                completeDate: date_completed
            }

            sendPartyAssignments(partyAssignments)
        }
    }
)