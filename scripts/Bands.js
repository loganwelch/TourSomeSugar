import { getBands } from "./database.js"

const bandList = getBands()

//add event listener to display window alert showing all the venues the clicked band is playing at



export const Bands = () => {
    let html = "<ul>"

    for (const band of bandList) {
        html += `<li>${band.name}</li>`
    }


    html += "</ul>"

    return html
}