const applicationState = {
    clowns: [],
    reservations: [],
    partyAssignments: [],
}


const API = "http://localhost:8088"

// RESERVATIONS

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

// PARTY ASSIGNMENTS

export const fetchPartyAssignments = () => {
    return fetch(`${API}/partyAssignments`)
    .then (response => response.json())
    .then(
        (partyAssignments) => {
            applicationState.partyAssignments = partyAssignments
        }
    )
}

export const getPartyAssignments = () => {
    return applicationState.partyAssignments.map(partyAssignments => ({...partyAssignments}))
}

export const sendPartyAssignments = (assignments) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(assignments)
    }

    return fetch(`${API}/partyAssignments`, fetchOptions)
    .then (response => response.json())
    .then(
        (partyAssignments) => {
            applicationState.partyAssignments = partyAssignments
        }
    )
    .then(
        () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

// CLOWNS

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then (response => response.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
        }
    )
}

export const getClowns = () => {
    return applicationState.clowns.map(clowns => ({...clowns}))
}

// DELETE

export const denyRequest = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE"})
    .then(
        () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}