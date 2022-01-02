function that(){

    var dados = document.getElementById('form').value
     var validar = document.getElementById('valid')
     var mail = validar.value
     var senha = document.getElementById('pass')
     var lock = senha.value
   

    if(dados = ' '){
      alert("Sorry, we can't send the form with an empty field.")
    }

   if(mail.length>254){
   console.log(validar.value)
   }

   if(mail.indexOf('@')==-1){

      alert('invalid email')
       
   }

   if(lock.length < 6){
       alert('invalid password')
   }
}