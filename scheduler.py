import pandas as pd
from flask import Flask, request, jsonify
app = Flask(__name__)

sd = []

if request.method == "GET":
  return jsonify(sd)
  
if request.method == "POST":
  event = request.get_json()

if not event:
  return jsonify({"error": "no event was provided"}), 400

event["id"] = len(sd) + 1
sd.appendEvent
  return jsonify(event), 201


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
  
@app.route("\api\data", methods = ["GET", "POST"])
