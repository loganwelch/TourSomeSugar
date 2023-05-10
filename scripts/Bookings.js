import { getBookings, getVenues, getBands } from "./database.js"



// Get copy of state for use in this module
let bands = getBands()
const venues = getVenues()
const bookings = getBookings()


// Function whose responsibility is to find the band for a booking
const findBand = (booking, allBands) => {
    let orderBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            orderBand = band
        }
    }

    return orderBand
}

// Function whose responsibility is to find the venue for a booking
const findVenue = (booking, allVenues) => {
    let orderVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            orderVenue = venue
        }
    }

    return orderVenue
}



//window alert should be presented to the user that displays all of 
//the band information (name, genre, year formed, number of members).
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was an booking list item clicked?
        if (itemClicked.dataset.type === "booking") {
            // Get the id of the employee clicked
            const bookingBandId = parseInt(itemClicked.dataset.bandid)
            // Start a counter variable at 0

            for (const band of bands) {
                if (band.id === bookingBandId) {

                    window.alert(`${band.name}\n${band.genre} \nFormed in ${band.formed} \n${band.numMembers} band members`)
                }
            }
        }
    }
)

export const Bookings = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        if (venue && band) {
            html += `<li data-type="booking" data-bandId="${booking.bandId}">${band.name} is playing at ${venue.name} on ${new Date(booking.bookingDate).toLocaleDateString()}</li>`
        }

    }


    html += "</ul>"

    return html
}