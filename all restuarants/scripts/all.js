const all = document.querySelector(".all");
let restaurantsInfo = [
    {
        name:"Aux Saveurs de chez nous",
        profile:"./images/profile.jpeg",
        averagePrice:"FCFA 1500",
        location:" Carrefour Fin goudron Bloc C, Makepe , Douala",
        contact1:"+237 699 984 073",
        contact2: "+237 672 440 220",
        email:"",
        socialMedia:"",
        menu:{ 1:"./images/pic 1.jpeg",2:"./images/pic 2.jpeg"}

    },
    {
        name:"2Aux Saveurs de chez nous",
        profile:"./images/profile.jpeg",
        averagePrice:"FCFA 1500",
        location:" Carrefour Fin goudron Bloc C, Makepe , Douala",
        contact1:"+237 699 984 073",
        contact2: "+237 672 440 220",
        email:"",
        socialMedia:"",
        menu:{ 1:"./images/pic 1.jpeg",2:"./images/pic 2.jpeg"}

    },
    {
        name:"3Aux Saveurs de chez nous",
        profile:"./images/profile.jpeg",
        averagePrice:"FCFA 1500",
        location:" Carrefour Fin goudron Bloc C, Makepe , Douala",
        contact1:"+237 699 984 073",
        contact2: "+237 672 440 220",
        email:"",
        socialMedia:"",
        menu:{ 1:"./images/pic 1.jpeg",2:"./images/pic 2.jpeg"}

    },
    {
        name:"4Aux Saveurs de chez nous",
        profile:"./images/profile.jpeg",
        averagePrice:"FCFA 1500",
        location:" Carrefour Fin goudron Bloc C, Makepe , Douala",
        contact1:"+237 699 984 073",
        contact2: "+237 672 440 220",
        email:"",
        socialMedia:"",
        menu:{ 1:"./images/pic 1.jpeg",2:"./images/pic 2.jpeg"}
    },
    {
        name:"5Aux Saveurs de chez nous",
        profile:"./images/profile.jpeg",
        averagePrice:"FCFA 1500",
        location:" Carrefour Fin goudron Bloc C, Makepe , Douala",
        contact1:"+237 699 984 073",
        contact2: "+237 672 440 220",
        email:"",
        socialMedia:"",
        menu:{ 1:"./images/pic 1.jpeg",2:"./images/pic 2.jpeg"}
    }
]
console.log(restaurantsInfo.length);
function createRestuarantsButtons() {
   
    let added_btn = 0

    restaurantsInfo.forEach(restaurant => {
        if (added_btn<restaurantsInfo.length) {
            all.innerHTML += `<div class="row">
            <div class="profile">
            <img src ="${restaurant.profile}" alt="profile"></div>
            <div class="info-1">
            <h1>${restaurant.name}</h1>
            <span>${restaurant.location}</span>
            
            </div>
            <div class="info-2">
            <span>${restaurant.averagePrice}<span></div>
            </div>`
        }
        
        added_btn++
        console.log(added_btn);
    })}
    createRestuarantsButtons()
let b= document.getElementById('t')
b.addEventListener
