#Assign Hw FOr next week

'''Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
'''

#in human words, determine if a number is the same forwards ans backwards.
#due to how late this was posted, this is not requires to be done before class.
import random

arr=[]
for x in range(10):
  arr.append(random.randint(0,9))

num= random.randint(0,10)
result=(-1,-1)

for x in range(len(arr)):
  first=arr[x]
  for y in range(x+1, len(arr)):
    second=arr[y]
    if first + second == num:
      result = (x, y) 
 
print(result)
