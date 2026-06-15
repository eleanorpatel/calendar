import pandas as pd

sd = []
def addEvent():
  name = input("Write the name of your event: ")
  date = input("Write your date in this format: mm/dd/yyyy : ")
  location = input("Type in the location of this event: ")
  time = input("Type the time of start of this event in 24 hour format: ")
  event = [name, date, location, time]
  df = pd.DataFrame(event, columns = ["name", "date", "location", "time"])
  df.to_csv("calendar.csv")
  
def deleteEvent(name):
  readFile = pd.read_csv("calendar.csv")
  if name not in readFile:
    return None
  else:
    writeFile = readFile[readFile["name"]!= name]
    writeFile.to_csv("calendar.csv")
      
def clearSchedule():
  writeFile = []
  writeFile.to_csv("calendar.csv")
  
