fetch('http://localhost:3000/films')
.then(res => res.json())
.then(data => data.forEach((film, index) => { 
//    console.log(film)

     let title = document.querySelector("#films")
    const mov = document.createElement('li')
    mov.innerHTML =`
   <button class="btn"  > ${film.title}</button>
    `
    title.appendChild(mov)
    const buttn = document.querySelector('.btn')
    buttn.addEventListener('click', e => {
                e.preventDefault()
                let cardd = document.querySelector('#showing') 
            let availTickets = `${film.capacity}`- `${film.tickets_sold}`
            cardd.innerHTML=`
            <div class="card">
            <div id="title" class="title">${film.title}</div>
            <div id="runtime" class="meta">${film.runtime} minutes</div>
            <div class="content">
              <div class="description">
                <div id="film-info">${film.description}</div>
                <span id="showtime" class="ui label">${film.showtime}</span>
                <span id="ticket-num">${availTickets}</span> remaining tickets
              </div>
              <div class="extra content">
              <button id="buy-ticket" class="ui orange button">
                Buy Ticket
              </button>
            </div>
            `
})}))


