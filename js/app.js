let validName = false
let validEmail = false
let validPhone = false

function validateName () {
  let name = document.getElementById("client_name").value
  let regex = /^[_A-z]*((-|\s)*[_A-z])*$/
    if (regex.test(name)) {
    document.getElementById("client_name").style.color = "black"
    validName = true
  } else {
    document.getElementById("client_name").style.color = "red"
    validName = false
  }
}

function validateEmail () {
  let name = document.getElementById("client_email").value
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(name)) {
    document.getElementById("client_email").style.color = "black"
    validEmail = true
  } else {
    document.getElementById("client_email").style.color = "red"    
    validEmail = false
  }
}

function validatePhone () {
  let name = document.getElementById("client_phone").value
  let regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    if (regex.test(name)) {
    document.getElementById("client_phone").style.color = "black"
    validPhone = true
  } else {
    document.getElementById("client_phone").style.color = "red"    
    validPhone = false
  }
}

function submitButton () {
  let messageBox = document.getElementById("client_message").value
  let name = document.getElementById("client_name").value
    if (validName && validEmail && validPhone && messageBox) {
    alert(`Thank you ${name}! We will get back to you ASAP!`)
  } else {
    alert("Please check your values!")
  }
  console.log("Clicked")
}