let all = document.getElementById('21');
let res = document.createElement('a');
res.setAttribute('id','res')
let profile = document.createElement('div');
profile.setAttribute('class','profile');
let img = document.createElement('img');
img.setAttribute('src','1');
let info = document.createElement('span');
info.setAttribute('class','info');
let names = document.createElement('h1');
names.setAttribute('class','name');
let locations = document.createElement('span');
locations.setAttribute('class','location')
let price = document.createElement('span');
price.setAttribute('class','price')
let hr = document.createElement('hr');
all.appendChild(res);
res.appendChild(profile)
res.appendChild(info)
profile.appendChild(img)
info.appendChild(names)
info.appendChild(hr)
info.appendChild(locations)
info.appendChild(price)

console.log(all);









// {/* <a id="res">
           
//            <div class="profile">
//                <img src="./images/foreign.jpg" alt="profile">
//            </div>
//            <Span class="info">
//                <h1 class="name"> restuarant name</h1>
//                <hr>
//                <span class="location">Bali hotel serena</span>
//                <span class="average-price">1500</span>


//            </Span>
      

//    </a> */}

