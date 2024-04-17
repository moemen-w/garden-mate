document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("login");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "moemen@gmail.com" && password === "123456789") {
      window.location.href = "index.html";
    } else {
      alert("Wrong email or password. Please try again.");

      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  });
});
