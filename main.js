let email = document.querySelector(`input[type="email"]`);
let pass = document.querySelector(`input[type="password"]`);
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email.value,
            "password": pass.value
        })
    })
        .then(value => value.json())
        .then(value => {
            if (value.token) {
                window.location.href = "second.html";
            }
            else {
                alert(value.error);
            }
        })
        .catch(error => console.error(error))
})
