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


let Restaurants = [
  {
    name: "Les Paletuviers",
    type: "local",
    region: ["African", "European", "Cameroonian"],
    profile: "/Les Paletuviers Matanda/profile.jpeg",
    href: "/Les Paletuviers Matanda/Les Paletuviers.html",
    price: "5000f",
    contact: "6 98 21 12 0",
    facebook: "https://www.facebook.com/lespaletuviersmatanda/",
    email: "paletuviersmatanda@gmail.com",
    location: "Bonassama, Bonaberi, Douala",
    menu: [
      "/Les Paletuviers/Pic 1.jpeg",
      "/Les Paletuviers/Pic 2.jpeg",
      "/Les Paletuviers/Pic 3.jpeg",
      "/Les Paletuviers/Pic 5.jpeg",
    ],
    time: ["14h-23h", "11h-23h"],
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "le Baleine blue ",
    region: ["African", "European", "French", "Cocktails"],
    type: "local",
    href: "/Le Baleine blue de massa/La Baleine blue de massa.html",
    profile: "/le baleine blue de massa/Profile.jpg",
    price: "5000f",
    contact: ["6 94 37 14 60", "6 99 54 70 8"],
    email: "labaleinebluedemassa@gmail.com",
    location:
      " Bonanjo, Douala",
    menu: [
      "/le baleine blue de massa/pic 1.jpeg",
      "/le baleine blue de massa/pic 2.jpeg",
      "/le baleine blue de massa/pic 3.jpeg",
      "/le baleine blue de massa/pic 4.jpeg",
      "/le baleine blue de massa/pic 5.jpeg",
      "/le baleine blue de massa/pic 6.jpeg",
      "/le baleine blue de massa/pic 7.jpeg",
    ],
    time: "06h-00h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
 
  {
    name: "Les Peroquets",
    type: "local",
    href:"/Les Perroquets/Les Perrroquet.html",
    region: ["African", "European"],
    profile: "/Les Perroquets/Profile.jpg",
    price: "6000f",
    contact: "6 51 65 14 81",
    email: "les2perroquets@gmail.com",
    location: "  Rue Ngosso Din, Bali , Douala",
    menu: [
      "/Les Peroquets/Pic 1.jpeg",
      "/Les Peroquets/Pic 3.jpeg",
      "/Les Peroquets/Pic 4.jpeg",
      "/Les Peroquets/Pic 5.jpeg",
      "/Les Peroquets/Pic 6.jpeg",
      "/Les Peroquets/Pic 7.jpeg",
      "/Les Peroquets/Pic 9.jpeg",
      "/Les Peroquets/Pic 10.jpeg",
      "/Les Peroquets/Pic 11.jpeg",
      "/Les Peroquets/Pic 12.jpeg",
      "/Les Peroquets/Pic 13.jpeg",
      "/Les Peroquets/Pic 14.jpeg",
      "/Les Peroquets/Pic 15.jpeg",
      "/Les Peroquets/Pic 16.jpeg",
    ],
    time: "12h-23h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
 
  {
    name: "La Pirogue",
    type: "local",
    href:"/La Pirogue/La Pirogue.html",
    profile: "/La Pirogue/profile.jpg",
    price: "3500f",
    contact: ["6 96 60 27 07", "2 43 59 74 63"],
    facebook: "https://m.facebook.com/Restaurant-la-Pirogue-1628976614001675/ ",
    location: "Carrefour Deido plage, Douala",
    menu: [
      "/La Pirogue/Pic 1.jpg",
      "/La Pirogue/Pic 2.jpg",
      "/La Pirogue/Pic 3.jpg",
      "/La Pirogue/Pic 4.jpg",
      "/La Pirogue/Pic 5.jpg",
      "/La Pirogue/Pic 6.jpg",
      "/La Pirogue/Pic 7.jpg",
      "/La Pirogue/Pic 8.jpg",
    ],
    time: ["07h-23h", "07h-00h"],
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    icons: [
      "Icons/instagram-2-1-logo-svgrepo-com.svg",
      "Icons/facebook-svgrepo-com.svg",
      "Icons/twitter-svgrepo-com.svg",
      "Icons/gmail-svgrepo-com.svg",
    ],
  },

  {
    name: "Oasis Cave",
    type: "diner",
    region: ["African", "European", "Cocktail"],
    profile: "/Oasis Cave/Profile.jpeg",
    href:"/Oasis Cave/Oasis Cave.html",
    price: "4000f",
    contact: "6 91 28 49 85",
    location: "Base Navale  Bonanjo Douala",
    menu: [
      "/Oasis Cave/pic 1.jpeg",
      "/Oasis Cave/pic 4.jpeg",
      "/Oasis Cave/pic 6.jpeg",
    ],
    time: "10h-00h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Clavio",
    type: "dinner",
    region: ["Lounge", "Bar", "Grillades", "Rooftop"],
    profile: "/Clavio/Profile.jpeg",
    href:"/Clavio/Clavio.html",
    price: "5000f",
    contact: "6 98 26 89 14",
    facebook: "https://facebook.com/clavioakwaofficiel",
    location: "Base Navale Bonanjo Douala",
    menu: [
      "/Clavio/pic 1.jpeg",
      "/Clavio/pic 3.jpeg",
      "/Clavio/pic 4.jpeg",
      "/Clavio/pic 5.jpeg",
    ],
    time: "10h-00h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Saga Africa",
    type: "dinner",
    href:"/Saga Africa/Saga Africa.html",
    region: ["African", "European", "French", "Cocktails"],
    profile: "/Saga Africa/Profile.jpeg",
    price: "5000f",
    contact: "6 51 65 14 81",
    facebook: "https://m.facebook.com/SagaAfricaAkwa/",
    email: "sagaafricaresa@gmail.com",
    location: " Akwa, Douala",
    menu: [
      "/Saga Africa/1.jpeg",
      "/Saga Africa/2.jpeg",
      "/Saga Africa/3.jpeg",
      "/Saga Africa/4.jpeg",
      "/Saga Africa/5.jpeg",
      "/Saga Africa/6.jpeg",
      "/Saga Africa/7.jpeg",
      "/Saga Africa/8.jpeg",
      "/Saga Africa/9.jpeg",
      "/Saga Africa/10.jpeg",
      "/Saga Africa/11.jpeg",
      "/Saga Africa/12.jpeg",
      "/Saga Africa/13.jpeg",
    ],
    time: "11h-23h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Opiom",
    type: "dinner",
    href:"/Opiom/Opiom.html",
    region: ["Louge", "Grill", "Bar"],
    profile: "/Opiom/profile.jpg",
    price: "2000f",
    contact: "6 95 23 99 28",
    facebook: "facebook.com/OPIOM-Bonamoussadi-958453004176352/",
    location: " Akwa, Douala",
    menu: [
      "/Opiom/1.jpeg",
      "/Opiom/2.jpeg",
      "/Opiom/3.jpeg",
      "/Opiom/4.jpeg",
      "/Opiom/5.jpeg",
      "/Opiom/6.jpeg",
      "/Opiom/7.jpeg",
      "/Opiom/8.jpeg",
      "/Opiom/9.jpeg",
      "/Opiom/10.jpeg",
      "/Opiom/11.jpeg",
    ],
    time: "11h-23h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  
  {
    name: "Fun Center",
    href:"/Fun Center/Fun Center.html",
    region: ["Pizza", "Cocktails"],
    profile: "/Fun center/Profile.jpeg",
    price: "5000f",
    contact: "+ 237 6 56 55 56 55",
    facebook: "www.facebook.com/funcenter237",
    location: "  Bonapriso , Douala",
    menu: ["/Fun center/pic 1.jpeg", "/Fun center/pic 2.jpeg"],
    time: ["07h-23h", "09h-23h"],
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Be Bop",
    type: "breakfast",
    href:"/Be Bop/Be Bop.html",
    region: ["Bar", "Cocktails"],
    profile: "/Be Bop/Profile.JPG",
    price: "5000f",
    contact: "696734852",
    email: "africa_bio@yahoo.fr",
    location: " Bonapriso , Douala",
    menu: [
      "/Be Bop/pic 1.JPG",
      "/Be Bop/pic 2.JPG",
      "/Be Bop/pic 3.JPG",
      "/Be Bop/pic 4.JPG",
      "/Be Bop/pic 5.JPG",
    ],
    time: "07h-00h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Le Fouquet",
    type: "breakfast",
    href:"/Le Fouquet/Le Fouquet.html",
    region: ["African", "European", "Cameroonian"],
    profile: "/Le Fouquet/Profile.jpeg",
    price: "5000f",
    contact: "+237 6 99 77 42 95",
    region: ["African", "European", "Camerounian"],
    location: "Akwa, Douala",
    menu: [
      "/Le Fouquet/Pic 1.jpeg",
      "/Le Fouquet/Pic 2.jpeg",
      "/Le Fouquet/Pic 3.jpeg",
      "/Le Fouquet/Pic 4.jpeg",
      "/Le Fouquet/Pic 5.jpeg",
      "/Le Fouquet/Pic 6.jpeg",
      "/Le Fouquet/Pic 8.jpeg",
      "/Le Fouquet/Pic 9.jpeg",
      "/Le Fouquet/Pic 10.jpeg",
    ],
    time: ["12h-00h", "12h-01h"],
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Lynk Garden",
    type: "breakfast",
    href:"/Lynk Garden/Lynk Garden.html",
    region: ["Cafe", "Bar"],
    profile: "/Lynk Garden/Profile.JPG",
    price: "8000f",
    contact: "696 001 832",
    email: "lynkafrique@gmail.com",
    location: "Bonapriso, Douala",
    menu: [
      "/Lynk Garden/Pic 1.JPG",
      "/Lynk Garden/Pic 2.JPG",
      "/Lynk Garden/Pic 3.JPG",
      "/Lynk Garden/Pic 4.JPG",
      "/Lynk Garden/Pic 5.JPG",
      "/Lynk Garden/Pic 6.JPG",
      "/Lynk Garden/Pic 7.JPG",
      "/Lynk Garden/Pic 8.JPG",
      "/Lynk Garden/Pic 9.JPG",
      "/Lynk Garden/Pic 10.JPG",
    ],
    time: "12h-20h",
    days: ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    name: "Terrific Coffee",
    type: "breakfast",
    href:"/Terrific Coffee/Terrific Coffee.html",
    region: ["Lounge", "Cafe"],
    profile: "/Terrific Coffee/Profile.jpeg",
    price: "1000f",
    contact: "6 79 70 10 13",
    facebook: "https://m.facebook.com/Terrificcoffee2018/",
    email: "support@terrificcoffeecm.com",
    location: " Sable Bonamoussadi,Douala",
    menu: [
      "/Terrrific Coffee/Pic 1.jpeg",
      "/Terrrific Coffee/Pic 2.jpeg",
      "/Terrrific Coffee/Pic 3.jpeg",
      "/Terrrific Coffee/Pic 5.jpeg",
      "/Terrrific Coffee/Pic 6.jpeg",
    ],
    time: ["06h-22h", "11h-22h", "06h- 23h", "08h-23h"],
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  {
    name: "My Sweetea",
    type: "dessert",
    href:"/My Sweetea/My Sweetea.html",
    region: "Milktea shop",
    profile: "/My Sweetea/Profile.jpg",
    price: "2000f",
    contact: "6 75 94 19 80",
    facebook: "https://m.facebook.com/My-sweeTEA-430201030765017",
    location: " Tradex Bonamoussadi , Douala",
    menu: ["/My Sweetea/Pic 2.jpg", "/My Sweetea/Pic 2.jpg"],
    time: "10h-20h",
    days: ["Teusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    name: "Nice Cream",
    type: "dessert",
    href:"/Nice Cream/Nice Cream.html",
    region: ["Glace", "Crepes", "Pizza"],
    profile: "/Nice Cream/Profile.jpeg",
    price: "1500f",
    contact: "690 03 03 44",
    email: "doualanicecream@gmail.com",
    location: "  Akwa, Douala",
    menu: [
      "/Nice Cream/Pic 1.jpeg",
      "/Nice Cream/Pic 4.jpeg",
      "/Nice Cream/Pic 8.jpeg",
      "/Nice Cream/Pic 9.jpeg",
    ],
    time: "11h-23h",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Maison H",
    type: "dessert",
    href:"/Maison H/Maison H.html",
    region: ["Glacier", "European", "Patisserie"],
    profile: "/Maison H/Profile.JPG",
    price: "2500f",
    contact: "6 56 00 55 55 ",
    email: "maisonhsarl@gmail.com",
    location: " Bali , Douala",
    menu: [
      "/Maison H/Pic 1.jpeg",
      "/Maison H/Pic 2.jpeg",
      "/Maison H/Pic 3.jpeg",
      "/Maison H/Pic 7.jpeg",
      "/Maison H/Pic 8.jpeg",
      "/Maison H/Pic 10.jpeg",
      "/Maison H/Pic 11.jpeg",
      "/Maison H/Pic 12.jpeg",
      "/Maison H/Pic 15.jpeg",
    ],
    time: "07h-23",
    days: [
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  

 
  
  {
    name: "La Broche",
    href:"/La Broche/La Broche.html",
    type: "foreign",
    region: "American",
    profile: "/La Broche/profile.jpeg",
    price: "8500f",
    contact: ["+237 675 444 361", "+237 697 704 427"],
    location:
      " Bonapriso, Douala",
    menu: [
      "/La Broche/Pic 1.jpeg",
      "/La Broche/Pic 3.jpeg",
      "/La Broche/Pic 4.jpeg",
      "/La Broche/Pic 5.jpeg",
      "/La Broche/Pic 6.jpeg",
      "/La Broche/Pic 7.jpeg",
      "/La Broche/Pic 9.jpeg",
      "/La Broche/Pic 10.jpeg",
      "/La Broche/Pic 11.jpeg",
    ],
    time: ["11h-15h", "18h-23h"],
    days: ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"],
    icons: [
      "Icons/instagram-2-1-logo-svgrepo-com.svg",
      "Icons/facebook-svgrepo-com.svg",
      "Icons/twitter-svgrepo-com.svg",
      "Icons/gmail-svgrepo-com.svg",
    ],
  },
  
  
  
];

let all = document.getElementById("all");
for (let index = 0; index < Restaurants.length; index++) {
  let profil = Restaurants[index].profile;
  let href = Restaurants[index].href;
  let res = document.createElement("a");
  res.setAttribute("id", "res");
  res.setAttribute("href", href);
  let profile = document.createElement("div");
  profile.setAttribute("class", "profile");
  let img = document.createElement("img");
  img.setAttribute("src", profil);
  img.setAttribute("alt", "picture");
  let info = document.createElement("span");
  info.setAttribute("class", "info");
  let names = document.createElement("h1");
  names.setAttribute("class", "name");
  names.textContent = Restaurants[index].name;
  let locations = document.createElement("span");
  locations.setAttribute("class", "location");
  locations.textContent = Restaurants[index].location;
  let price = document.createElement("span");
  price.setAttribute("class", "price");
  price.textContent = Restaurants[index].price;
  let hr = document.createElement("hr");
  all.appendChild(res);
  res.appendChild(profile);
  res.appendChild(info);
  profile.appendChild(img);
  info.appendChild(names);
  info.appendChild(hr);
  info.appendChild(locations);
  info.appendChild(price);

}
console.log(all);


all.addEventListener('click', (e)=>{
    if(e.target.id == "res"){
        window.location.href = e.target.href;
    }
})


