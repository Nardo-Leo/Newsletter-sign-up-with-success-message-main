const email = document.getElementById('email_field')
const span = document.getElementById('span_required')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function setError() {
  email.style.border = '2px solid #e63636'
  span.style.display = 'block'
}

function removeError() {
  email.style.border = ''
  span.style.display = 'none'
}

function emailValidate() {
  if (!emailRegex.test(email.value)) {
    setError()
  } else {
    removeError()
    console.log(email.value)
    localStorage.setItem('emailText', email.value)
  }
}

let paragrafo = document.getElementById('email_confirm')
paragrafo.textContent = localStorage.getItem('emailText')
