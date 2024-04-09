fetch('https://json-server-zeyw.onrender.com/films')
.then(res => res.json())
.then(data => { 
  data.forEach(film => { 
//    console.log(film)

     let titles = document.querySelector("#item")
    const mov = document.createElement('li')
    mov.innerHTML=`
    <button id ="${film.id}" onclick="showDetails()">${film.title}</button>
    <button id="del" >delete</button>
    `
    titles.appendChild(mov)
  
      mov.querySelector('#del').addEventListener("click", () =>{
        mov.remove()
        
       })

})})

function showDetails(){
  fetch('https://json-server-zeyw.onrender.com/films')
  .then(res => res.json())
  .then(data => { 
    data.forEach(film => { 
      const buttn = document.getElementById(`${film.id}`)
    buttn.addEventListener('click', e => {
                
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
                <span id="ticket-num">${availTickets}remaining tickets</span> 
              </div>
              <div class="extra content">
              <button id="buy-ticket" class="ui orange button" onclick="availTickets(-1)">
                Buy Ticket
              </button>
            </div>
            `
      const img = document.querySelector('#poster')
      img.src = `${film.poster}`
  })})})}

function availTickets(click){ 
  const span = document.getElementById('ticket-num')
  const value = parseInt(span.innerHTML)
  span.innerHTML = value 
  
  if(value > 1){
    span.innerHTML = value + click + 'remaining tickets'
  }else {
    span.textContent = "sold out"
  }
  
}
