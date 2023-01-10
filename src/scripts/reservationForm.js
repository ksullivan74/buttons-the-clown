import { sendReservations } from "./dataAccess.js"

export const reservationForm = () => {
    return`
    <div class="field">
        <label class="label" for="parentName">Parent Name:</label>
        <input type="text" name="nameOfParent" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Name of Child:</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="numberOfChildren">number of children attending:</label>
        <input type="number" name="numberOfChildren" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">address of party:</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationDate">date of the party:</label>
        <input type="date" name="reservationDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partylength">time needed (in hours):</label>
        <input type="number" name="partylength" class="input" />
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
    `
}

document.addEventListener("click",clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParent = document.querySelector("input[name='nameOfParent']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumberOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userPartyLength = document.querySelector("input[name='partylength']").value

        const reservations = {
            parentName: userParent,
            childName: userChildName,
            numberOfChildren: userNumberOfChildren,
            address: userAddress,
            reservationDate: userReservationDate,
            partylength: userPartyLength
        }

        sendReservations(reservations)

    }
}
)

