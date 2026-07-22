const name = document.getElementById("name")
const date = document.getElementById("date")
const time = document.getElementById("time")

function createEvent(){
  let event = {"name": name, "date" : date, "time": time}
  localStorage.setItem(event["name"], JSON.stringify(event))
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
  fetch("\api\data")
  .then(response=> {
    if() !response.ok(){
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
