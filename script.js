const name = getElementById("name")
const time = getElementById("time")

function createEvent()
  let event = {"name": name, "date" : date, "time": time}
  localStorage.setItem("localEvent", JSON.stringify(event))

function deleteItem()
  let item = localStorage.getItem("
