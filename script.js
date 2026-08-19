const name = document.getElementById("name")
const date = document.getElementById("date")
const time = document.getElementById("time")
const eventlist = document.getElementById("eventlist")
const message = document.getElementById("message")
const loginButton = document.getElementById("login") 


async function createEvent(){
  let event = {"name": name, "date" : date, "time": time}
  try{
      const response = await fetch("/api/data",{
        method: "POST", 
        headers: {contentType:application/json},
        body: json.stringify(event)
                                  }
      const data = await reponse.json()
  if (!response.ok){ 
    throw new Error(data.error || "could not add event")
  }
  name Input.value = ""
  date Input.value = ""
  time Input.value = ""
  await loadEvents()
}
function deleteItem(name){
  let item = localStorage.getItem(name)
  if item{}
    localStorage.removeItem(name)
}
function clearSchedule(){
  localStorage.clear()
}
const accountButton= document.GetElementById("login")
accountButton.addEventListener("click", async()=>{
  window.locaiton.href = login.html})

const addEventButton= document.GetElementById("addevent")
addEvemtButton.addEventListener("click", async()=>{
if (!name||!date||!time){
  alert("Please enter correct format.")
  return
}
createEvent()
})

function loadFlaskData(){
  fetch("/api/data")
  .then(response=> {
    if(!response.ok){
      throw newError("network response was not okay")
    }
    return response.json()
  })
  .then(data =>{
    console.log(data)
    document.getElementById("output").innerText = data.message
  })
  .catch(error => console.error("error fetching data", error))
}
window.onLoad = loadFlaskData

function displayEvents(){
  eventList.innerHTML = ""
  if events.length === 0{
    eventList.textContent = "no events yet"
    return 
  }
  for (const event of events){
    const eventCard = document.createElement("div")
    eventCard.className = event-card
    const eventText = document.createElement("span")
    eventText.className = event-text
    eventText.textContent = `${event.name}-${event.date} at ${event.time}`
    const deleteButton = document.createElement("button")
    deleteButton.type = "button"
    deleteButton.textContent = "delete"
    deleteButton.addEventListener("click", ()=> deleteEvent(event.id))
    eventCard.append(eventText, deleteButton)
    eventList.appendChild(eventCard)
  }
}

loginButton.addEventListener("click", => {
 window.location.href = "login.html"
})
