function that() {

  var validar = document.getElementById('valid')
  var mail = validar.value
  var senha = document.getElementById('pass')
  var lock = senha.value
  var lname = document.getElementById('last').value
  var Fname = document.getElementById('First').value

  if (Fname == '') {
    document.getElementById('requiredname').className = "failed"
  }
  
  if(lname == ''){
    document.getElementById('yourlast').className = "failed"
  }

  if (mail.length > 254) {
    console.log(validar.value)
  }
   
  if (mail.indexOf('@') == -1) {

    document.getElementById('invalid').className = "failed"

  }

  if (lock.length < 4) {
    document.getElementById('littlebit').className ="failed"
  }
  else{
    window.location.reload()
  }
}