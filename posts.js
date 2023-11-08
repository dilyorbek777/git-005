function like() {
  document.querySelectorAll(".fa-heart").forEach((heart) => {
    heart.addEventListener("click", (e) => {
      e.target.classList.toggle("active")
    })
  })
}

let form = document.getElementById("post")
let result = {}
form.addEventListener("change", (event) => {
  result[event.target.name] = event.target.value
})


form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(result),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(res => res.json()).then(dre => {
    console.log(dre);
  })

})
let rni = 0
let rnl = 0
fetch("http://localhost:3000/posts")
  .then(res => res.json())
  .then((data) => {
    data.forEach((detail) => {
      console.log(detail);
      let randomlogo = Math.ceil(Math.random() * 100)
      let randomImg = Math.ceil(Math.random()*100)
      if (randomlogo<=50) {

        rnl = "user500.png"
      }else
      if (randomlogo<=60) {

        rnl = "user501.png"
      }else
      if (randomlogo<=60) {

        rnl = "user502.jfif"
      }else  if (randomlogo<=70) {

        rnl = "user504.png"
      }else  if (randomlogo<=80) {

        rnl = "yourslogo.png"
      }else if (randomlogo<=90) {

        rnl = "userlogo (1).png "
      }else
      if (randomlogo<=40) {

        rnl = "users2 (3).png"
      }else  if (randomlogo<=30) {

        rnl = "user509.jfif"
      }else  if (randomlogo<=20) {

        rnl = "userlogo (4).png"
      }
      if (randomImg<=50) {
        rni = "photo.jfif"
      }else
      if (randomImg<=60) {
        rni = "photo.png"
      }else
      if (randomImg<=60) {
        rni = "photo2.png"
      }else  if (randomImg<=70) {
        rni = "pizza.jfif"
      }else  if (randomImg<=80) {
        rni = "scr.jfif"
      }else if (randomImg<=90) {
        rni = "tech1.jfif"
      }else
      if (randomImg<=40) {
        rni = "image4.png"
      }else  if (randomImg<=30) {
        rni = "user interface (3).png"
      }else  if (randomImg<=20) {
        rni = "user interface (1).png"
      }
      document.querySelector(".recent").innerHTML+=`
      <div class="post">
    <div class="userpost">
    <img src="./images/${rnl}" alt="">
    ${detail.username}
    
    </div>
    <img src="./images/${rni}" alt="">
    <p class="describtion">
    ${detail.describtion}
    </p>
    <div class="icos">
    <i class="fa-solid fa-heart" onclick="like()"></i>
    <i class="fa-solid fa-comment"></i>
    <i class="fa-solid fa-share-nodes"></i>
    </div>
    </div>
     `
    })
  })




  
let local = localStorage.getItem("user")
if (local === null) {
  location.assign("./register.html"); console.log("ksndsj");
}

let localProf = localStorage.getItem("Profile")
console.log(localProf);
if (localProf === null) {
  location.assign("./register.html"); console.log("ksndsj");
}