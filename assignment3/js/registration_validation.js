document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const nameRegex = /^[a-zA-Z'-]+$/;
    const emailRegex = /^[a-zA-Z-]([\w-.]+)?@([\w-]+\.)+[\w]+$/;

    if (!nameRegex.test(name) || name.length < 2 || name.length > 100) {
      alert(
        "Invalid name. Ensure it is between 2 and 100 characters and contains only letters, hyphens, apostrophes, and spaces."
      );
      return;
    }

    if (isNaN(age) || age < 18 || age > 130) {
      alert("Invalid age. Please enter a number between 18 and 130.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email.");
      return;
    }

    if (phone && !/^[04][0-9]{9}$/.test(phone)) {
      alert("Invalid phone number. Ensure it is 10 digits and starts with 04.");
      return;
    }

    alert("Registration successful!");
  });
