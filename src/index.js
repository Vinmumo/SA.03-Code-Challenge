document.addEventListener('DOMContentLoaded',async(event)=>{
  getMovies()
  showDetails()
})
function getMovies(){ 
fetch('https://json-server-zeyw.onrender.com/films',{
method:"GET",
headers:{
  "Content-type":"application/json",
  "Accept":"application/json"
}
}
)
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

mov.querySelector('#del').addEventListener('click', () => {
  mov.innerHTML=''
  delMov(`${film.id}`)
})
})})
}
function showDetails(){
  fetch('https://json-server-zeyw.onrender.com/films',{
    method:"GET",
    headers:{
      "Content-type":"application/json",
      "Accept":"application/json"
    }
    })
  .then(res => res.json())
  .then(data => data.forEach(film => displayFilm(film)))
  }
function displayFilm(film){
    document.getElementById(`${film.id}`).addEventListener('click', () => {
              
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
            <button id="buy-ticket" class="ui orange button">
              Buy Ticket
            </button>
          </div>
          `
  
    const img = document.querySelector('#poster')
    img.src = `${film.poster}`


   cardd.querySelector('#buy-ticket').addEventListener("click", () =>{  
    const span = document.getElementById('ticket-num')
  const value = parseInt(span.innerHTML)
  const click = -1
  span.innerHTML = value 
  
   if(value > 1){
    span.innerHTML = value + click + 'remaining tickets'
  }else {
    span.textContent = "sold out"
  }
    updateTickets(film)})
})

}

function updateTickets(film){
  fetch(`https://json-server-zeyw.onrender.com/films/${film.id}`,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify(film)
    }
    )
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function delMov(id){
    fetch(`https://json-server-zeyw.onrender.com/films/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type":"application/json"
    }
    }
    )
    .then(res => res.json())
    .then(data => console.log(data))
  }
  