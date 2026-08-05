#Assign Hw FOr next week

#Given a random number and any array, find the first set of numbers that when added return the number. If no such number exists return -1

import random

arr=[]
for x in range(10):
  arr.append(random.randint(0,9))

num= random.randint(0,10)


for x in range(len(arr)):
  
