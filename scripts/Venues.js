import { getVenues, getBookings, getBands } from "./database.js"

const venuesList = getVenues()
const bookingsList = getBookings()
const bandsList = getBands()


// Function whose responsibility is to find the band for a venue
const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }

    return bookingBand
}

// Function whose responsibility is to find the venue for a band
// const findVenue = (booking, allVenues) => {
//     let bookingVenue = null

//     for (const venue of allVenues) {
//         if (venue.id === booking.venueId) {
//             bookingVenue = venue
//         }
//     }

//     return bookingVenue
// }

//a THIRD function to combine what we got above from those two
const findMessage = (click) => {
    //let message = ``
    const matchingBands = []


    for (const booking of bookingsList) {
        if (booking.venueId === click) {
            const band = findBand(booking, bandsList)
            //const venue = findVenue(booking, venuesList)
            matchingBands.push(band.name)
            //let venueBands = band.join(' , ')

            //return message = `${venueBands} is playing ${venue.name}`
        }
    }
    if (matchingBands.length === 0) {
        return 'No bands are playing at this venue.'
    } else {
        return `The following bands are playing at this venue: ${matchingBands.join(' ,')}.`
    }
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a venue list item clicked?
        if (itemClicked.dataset.type === "venue") {
            const venueId = parseInt(itemClicked.dataset.id);

            for (const venue of venuesList) {
                if (venue.id === venueId) {
                    const alert = findMessage(venueId)
                    window.alert(alert)
                }
            }
        }
    }
)


//add event listener to display window alert showing all bands playing at clicked venue


export const Venues = () => {
    let html = "<ul>"

    for (const venue of venuesList) {
        html += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
    }


    html += "</ul>"

    return html
}