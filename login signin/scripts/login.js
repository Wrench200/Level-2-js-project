
// toogle between forms
let signup = document.getElementById('sign');
let signupform = document.getElementById('disabled');
let loginform = document.getElementById('login')
let signin = document.getElementById('log')
console.log(signup);
function toogle() {


    signup.addEventListener('click', () => {
        loginform.setAttribute('id', 'disabled');
        signupform.setAttribute('id', 'signup');
    })

    signin.addEventListener('click', () => {
        signupform.setAttribute('id', 'disabled');
        loginform.setAttribute('id', 'login');
    })
}

toogle()

//create account form
let form1 = document.getElementById('signupform');
console.log(form1);

form1.addEventListener('submit', (e) => {
    function store() {

        e.preventDefault();
        let uname = document.getElementById('uname');
        let pass = document.getElementById('password');
        let pass1 = document.getElementById('password1')
        let email = document.getElementById('email')
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;
        let error = document.getElementById('helper-text');
        let special = /\W/g;

        if (uname.value.length == 0) {
            alert('Please fill in username');
            return;
        }

        if (pass.value.length == 0) {
            alert('Please fill in password');

        }


        else if (uname.value.length == 0 && pass.value.length == 0) {
            alert('Please fill in username and password');

        } else if (pass.value.length < 8) {
            alert('Max of 8');

        } else if (!pass.value.match(numbers)) {
            alert('please add 1 number');

        } else if (!pass.value.match(upperCaseLetters)) {
            alert('please add 1 uppercase letter');

        } else if (!pass.value.match(lowerCaseLetters)) {
            alert('please add 1 lovercase letter');

        } else if (!pass.value.match(special)) {
            alert('please add 1 special character');

        } else if (pass1.value.length == 0) {
            alert('Please confirm password');

        } else if (pass1.value !== pass.value) {
            alert('Passwords dont match');

        } else {


            if (localStorage.getItem("userData") == null) {
                let userData = [];
                const hasrshedPas = CryptoJS.SHA256(pass).toString();
                let user = {
                    username: uname.value,
                    email: email.value,
                    password: hasrshedPas
                }

                userData.push(user)
                localStorage.setItem('userData', JSON.stringify(userData));
            }
            else {
                let data = localStorage.getItem("userData");
                let users = JSON.parse(data);
                let foundUser = users.find(user => user.email == email.value);
                if (!foundUser) {
                    // create user here
                    const hasrshedPas = CryptoJS.SHA256(pass).toString();
                    let user = {
                        username: uname.value,
                        email: email.value,
                        password: hasrshedPas
                    }
                    users.push(user)
                    localStorage.setItem('userData', JSON.stringify(users));
                    return;
                }
                alert('User already exists');

            }

            return;


        }



    }

    store();

})


let form2 = document.getElementById('login');
form2.addEventListener('submit', (e)=>{
e.preventDefault();
    let email2 = document.getElementById('email2').value;
    let pass2 = document.getElementById('password2').value;
    let data = localStorage.getItem("userData");
    let users = JSON.parse(data);
const hasrshedPa = CryptoJS.SHA256(pass2).toString();
   
    let foundUser = users.find(user => user.email == email2 && user.password == hasrshedPa);
    if (!foundUser) {
        console.log(hasrshedPa);
        alert('invalid credentials');
        return;
    }
    window.location.href = '/landing/index.html';



})



