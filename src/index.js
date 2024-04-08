fetch('http://localhost:3000/films')
.then(res => res.json())
.then(data => { 
  data.forEach(film => { 
//    console.log(film)

     let titles = document.querySelector("#item")
    const mov = document.createElement('li')
    mov.innerHTML=`
    <button id ="${film.id}" onclick="showDetails()">${film.title}</button>
    `
    titles.appendChild(mov)
   
})})

function showDetails(){
  fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(data => { 
    data.forEach(film => { 
      const buttn = document.getElementById(`${film.id}`)
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
      const img = document.querySelector('#poster')
      img.src = `${film.poster}`
  })})})}
// textContent = film.title
//     const buttn = document.querySelector('.btn')
//     buttn.addEventListener('click', e => {
//                 e.preventDefault()
//                 let cardd = document.querySelector('#showing') 
//             let availTickets = `${film.capacity}`- `${film.tickets_sold}`
//             cardd.innerHTML=`
//             <div class="card">
//             <div id="title" class="title">${film.title}</div>
//             <div id="runtime" class="meta">${film.runtime} minutes</div>
//             <div class="content">
//               <div class="description">
//                 <div id="film-info">${film.description}</div>
//                 <span id="showtime" class="ui label">${film.showtime}</span>
//                 <span id="ticket-num">${availTickets}</span> remaining tickets
//               </div>
//               <div class="extra content">
//               <button id="buy-ticket" class="ui orange button">
//                 Buy Ticket
//               </button>
//             </div>
//             `
// })})