function Roll() {

    let logged = false;

    let user = document.getElementById("user").value.trim();
    let password = document.getElementById("password").value.trim();
    let result = document.getElementById("data");

    while (!logged) {

        if (user === "" || password === "") {
            result.style.color = "orange";
            result.textContent = "Please login first ⚠️";
            break;
        }


        if (user === "Arman" && password === "1234") {
            result.style.color = "green";
            result.textContent = "Logged In ✅";
            logged = true;   
        }


        else if (user !== "Arman") {
            result.style.color = "red";
            result.textContent = "Username is incorrect ❌";
            break;
        }

        else if (password !== "1234") {
            result.style.color = "red";
            result.textContent = "Password is incorrect ❌";
            break;
        }
    }
}