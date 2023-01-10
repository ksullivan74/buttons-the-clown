const applicationState = {
    clowns: [],
    reservations: [],
    partyAssignments: []
}


const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
    .then (response => response.json())
    .then(
        (partyReservations) => {
            applicationState.reservations = partyReservations
        }
    )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservations => ({...reservations}))
}

export const sendReservations = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
    .then (response => response.json())
    .then(
        (partyReservations) => {
            applicationState.reservations = partyReservations
        }
    )
    .then(
        () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}