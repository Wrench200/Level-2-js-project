let account = document.getElementById('account');
if (sessionStorage.getItem('user')){
  account.innerHTML='Log out'
  account.removeAttribute('href');
  account.style.cursor='pointer' ;
  
  
  
}
account.addEventListener('click',(e)=>{
 

  sessionStorage.removeItem('user');
  window.location.reload()
})








let english = document.getElementById('eng');
let french = document.getElementById('fr');
let contactUs = document.getElementById('contact us');

let phone = document.getElementById('phone');
let sendMessage = document.getElementById('Msg');
let fullName = document.getElementById('name');
let message = document.getElementById('message');
let submit = document.getElementById('snd');

french.addEventListener('click', (e) => {
    french.style.background = '#ea6f98';
    english.style.background = '#00bcd4';
    contactUs.innerHTML = 'Contactez-Nous';
    phone.innerHTML = '<i class="fa fa-phone"></i> Appel';
    sendMessage.innerHTML = 'Envoyez vos messages';
    fullName.innerHTML = 'Noms';
    message.innerHTML = 'Saisissez vos messages...';
    submit.setAttribute('value', 'Envoyer');
})

english.addEventListener('click', (e) => {
    english.style.background = '#ea6f98';
    french.style.background = '#00bcd4';
    contactUs.innerHTML = 'Contact Us';
    phone.innerHTML = '<i class="fa fa-phone"></i> Phone'
    sendMessage.innerHTML = 'Send Message';
    fullName.innerHTML = 'Full name';
    message.innerHTML = 'Type your messages...';
    submit.setAttribute('value', 'Send');
})
//Form validation

let form = document.getElementById('form');
let names = document.getElementById('Nm');
let mail = document.getElementById('email')
let msg = document.getElementById('msge');

form.addEventListener('submit', (e) => {
    console.log(names.value);
    let textOnly = /[^\d\W]/;
    e.preventDefault()
    if (!names.value.match(textOnly)) {
        alert('Please input a valid name')
        return
    }
    let contacts = {
        name: names.value,
        mail: mail.value,
        mssg: msg.value
    }
    localStorage.setItem("contacts", JSON.stringify(contacts))
    let modal = document.getElementById('modal')
    if(submit.value == "Envoyer"){
      
        modal.innerHTML = 'Message envoyer avec success'
        setTimeout(function() {
            modal.innerHTML = ''
        },5000)
    }
    else{
        setTimeout(function() {
            modal.innerHTML = ''
        },5000)
    
    modal.innerHTML = 'Successfully sent message'
    }
   
})