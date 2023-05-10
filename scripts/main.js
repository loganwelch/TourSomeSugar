import { Bookings } from "./Bookings.js"
import { Venues } from "./Venues.js"
import { Bands } from "./Bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1></h1>
<h1 class="header">bandy band bands lawl</h1>

<article class="bookingsBox">
<h2>Bookings</h2>
    <div class="bookingsList">
    ${Bookings()}
    </div>
</article>

<article class="details">
<section class="detail--column list details__products">
<h2>Venues</h2>
${Venues()}
</section>
<section class="detail--column list details__employees">
<h2>Bands</h2>
${Bands()}
</section>
</article>


`

mainContainer.innerHTML = applicationHTML