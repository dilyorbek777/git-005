let form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    localStorage.setItem("user", "registered")
    e.preventDefault();
    fetch("http://localhost:3000/passwords")
    .then(res => res.json())
    .then((data) =>{
        console.log(data)
        data.forEach((item) => {
            console.log(item)
            if (item.email===document.getElementById("em").value&&item.password===document.getElementById("pas").value) {
                console.log("scsdjcnjn");
                location.assign("./home.html")
                localStorage.setItem("Profile","loggedIn")
            }
            else{
                document.querySelector(".err").innerHTML="Email or password is not true"
            }
        });
    }
        
    )

})

let local = localStorage.getItem("user")
console.log(local);
if (local === null) {
  location.assign("./register.html"); console.log("ksndsj");
}