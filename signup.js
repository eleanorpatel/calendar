const signUpButton = document.getElementById("Signup")

signUpButton.addEventListener("click", =>{
 window.location.href = "signup.html" 
}) 

const username = document.getElementById("username")
const password = document.getElementById("password")
const signInButton = document.getElementById("signin")
const email = document.getElementById("email")
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
function signIn(){
  if username == "" or password == "" or email ==""{
    alert("all fields must be filled in")
  }
}

signInButton.addEventListener("click", =>{
  signin()
    window.location.href = "index.html"
})
