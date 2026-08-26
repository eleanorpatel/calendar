const signUpButton = document.getElementById("Signup")

signUpButton.addEventListener("click", =>{
 window.location.href = "signup.html" 
}) 

const username = document.getElementById("username")
const password = document.getElementById("password")
const signInButton = document.getElementById("signin")

function signIn(){
  if username == "" or password == ""{
    alert("all fields must be filled in")
  }
}

signInButton.addEventListener("click", =>{
  signin()
    window.location.href = "index.html"
})
