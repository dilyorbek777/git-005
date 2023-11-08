fetch("http://localhost:3000/passwords")
    .then(res => res.json())
    .then((data) =>
        console.log(data)

    )

let result = {};
let form = document.getElementById("form")
form.addEventListener("change", (e) => {

    result[e.target.name] = e.target.value
    console.log(result);
})

form.addEventListener("submit", (e) => {
    localStorage.setItem("user","registered")
    e.preventDefault();
    
    fetch("http://localhost:3000/passwords", {
        method: "POST",
        body:JSON.stringify(result),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then((data) =>
            console.log(data)

        )
  
})

if (localStorage.getItem("user")==="registered") {
    location.assign("./index.html")
}