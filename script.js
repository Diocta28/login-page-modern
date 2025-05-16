document.getElementById('loginForm').addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (email === "" || pass === "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Email and Password can't be empty",
        });
        return;
    }

    if (email === "admin@123" && pass === "123") {
        Swal.fire({
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            Timer: 1500,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Email or Password is incorrect",
        });
    }
});