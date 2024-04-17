document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("login");

  loginButton.addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "moemen@gmail.com" && password === "123456789") {
      window.location.href = "profile.html";
    } else {
      alert("Wrong email or password. Please try again.");

      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  });
});
