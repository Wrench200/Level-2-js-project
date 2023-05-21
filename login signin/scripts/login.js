// toogle between forms
let signup = document.getElementById("sign");
let signupform = document.getElementById("disabled");
let loginform = document.getElementById("login");
let signin = document.getElementById("log");
console.log(signup);
function toogle() {
  signup.addEventListener("click", () => {
    loginform.setAttribute("id", "disabled");
    signupform.setAttribute("id", "signup");
  });

  signin.addEventListener("click", () => {
    signupform.setAttribute("id", "disabled");
    loginform.setAttribute("id", "login");
  });
}

toogle();

//create account form
let form1 = document.getElementById("signupform");
console.log(form1);

form1.addEventListener("submit", (e) => {
  function store() {
    e.preventDefault();
    let uname = document.getElementById("uname");
    let pass = document.getElementById("password");
    let pass1 = document.getElementById("password1");
    let email = document.getElementById("email");
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let error = document.getElementById("helper-text1");
    let special = /\W/g;
    console.log(error.innerHTML);

    if (uname.value.length == 0) {
      error.innerHTML = "Please fill in username";
      return;
    }

    if (pass.value.length == 0) {
        error.innerHTML = "Please fill in password";
      return;
    } if (uname.value.length == 0 && pass.value.length == 0) {
        error.innerHTML = "Please fill in username and password";
     return;
    } if (pass.value.length < 8) {
        error.innerHTML = "Max of 8";
      return;
    } if (!pass.value.match(numbers)) {
        error.innerHTML = "please add 1 number";
      return;
    } if (!pass.value.match(upperCaseLetters)) {
        error.innerHTML = "please add 1 uppercase letter";
      return;
    } if (!pass.value.match(lowerCaseLetters)) {
        error.innerHTML = "please add 1 lovercase letter";
      return;
    } if (!pass.value.match(special)) {
        error.innerHTML = "please add 1 special character";
      return;
    } if (pass1.value.length == 0) {
        error.innerHTML = "Please confirm password";
      return;
    } if (pass1.value !== pass.value) {
        error.innerHTML = "Passwords dont match";
      return;
    } 
      if (localStorage.getItem("userData") == null) {
        let userData = [];

        let user = {
          username: uname.value,
          email: email.value,
          password: pass.value,
        };

        userData.push(user);
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        let data = localStorage.getItem("userData");
        let users = JSON.parse(data);
        let foundUser = users.find((user) => user.email == email.value);
        if (!foundUser) {
          // create user here

          let user = {
            username: uname.value,
            email: email.value,
            password: pass.value,
          };

          users.push(user);
          localStorage.setItem("userData", JSON.stringify(users));
          error.style.color = "#00bcd4";
          error.innerHTML = "Signup success";
          sessionStorage.setItem('user','ok' )
          setTimeout(() => {
            window.location.href = "/landing/index.html";
          }, 4000);
          return;
        }
        error.innerHTML = "User already exists";
        return;
      }

      return;
    }
  

  store();
});

let form2 = document.getElementById("login");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let email2 = document.getElementById("email2").value;
  let pass2 = document.getElementById("password2").value;
  let data = localStorage.getItem("userData");
  let users = JSON.parse(data);
  let error = document.getElementById("helper-text2");

  let foundUser = users.find(
    (user) => user.email == email2 && user.password == pass2
  );
  let emailfind = users.find((user) => user.email == email2);
  if (!emailfind) {
    error.innerHTML = "user not found";
    return;
  }
  if (!foundUser) {
    error.innerHTML = "Invalid credentials";
    return;
  }
  error.style.color = "#00bcd4";
  error.innerHTML = "Login success";
  sessionStorage.setItem('user','ok' )
  setTimeout(() => {
    window.location.href = "/landing/index.html";
  }, 4000);
});
