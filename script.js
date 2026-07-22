const name = document.getElementById("name")
const time = document.getElementById("time")

function createEvent()
  let event = {"name": name, "date" : date, "time": time}
  localStorage.setItem(event["name"], JSON.stringify(event))

function deleteItem(name)
  let item = localStorage.getItem(name)
  if item{}
    localStorage.removeItem(name)

function clearSchedule()
  localStorage.clear()

const accountButton= document.GetElementById("login")
accountButton.addEventListener("click", async()=>{})
window.locaiton.href = login.html
