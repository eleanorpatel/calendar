const name = getElementById("name")
const time = getElementById("time")

function createEvent()
  let event = {"name": name, "date" : date, "time": time}
  localStorage.setItem(event["name"], JSON.stringify(event))

function deleteItem(name)
  let item = localStorage.getItem(name)
  if item{}
    localStorage.removeItem(name)

function clearSchedule()
  localStorage.clear()
