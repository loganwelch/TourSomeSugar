import { getBands, getVenues, getBookings } from "./database.js"

const venuesList = getVenues()
const bookingsList = getBookings()
const bandsList = getBands()

// Function whose responsibility is to find the venue for a band
const findVenue = (booking, allVenues) => {
    let bookingVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}

const findMessage = (bandId) => {
    //let message = ``
    const matchingVenues = []


    for (const booking of bookingsList) {
        if (booking.bandId === bandId) {
            const venue = findVenue(booking, venuesList)
            //const venue = findVenue(booking, venuesList)
            matchingVenues.push(venue.name)
            //let venueBands = band.join(' , ')

            //return message = `${venueBands} is playing ${venue.name}`
        }
    }
    if (matchingVenues.length === 0) {
        return 'This band is not playing at any venues.'
    } else {
        return `This band is playing at the following venues: ${matchingVenues.join(' ,')}.`
    }
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a venue list item clicked?
        if (itemClicked.dataset.type === "band") {
            const bandId = parseInt(itemClicked.dataset.id);

            for (const band of bandsList) {
                if (band.id === bandId) {
                    const alert = findMessage(bandId)
                    window.alert(alert)
                }
            }
        }
    }
)



export const Bands = () => {
    let html = "<ul>"

    for (const band of bandsList) {
        html += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
    }


    html += "</ul>"

    return html
}