document.getElementById("petTestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  let isComplete = true;

  // Gather answers and calculate the score
  const questions = ["space", "time", "grooming", "noise", "interaction"];

  questions.forEach((question) => {
    const answer = document.querySelector(`input[name="${question}"]:checked`);
    if (answer) {
      score += parseInt(answer.value);
    } else {
      isComplete = false;
      alert("Please answer all questions.");
      return;
    }
  });

  // If all questions are answered, trigger animations
  if (isComplete) {
    // Trigger animations based on the score
    displayResult(score);
  }
});

function displayResult(score) {
  let petSuggestion;

  if (score <= 10) {
    petSuggestion = "Fish, Reptile, or Rodent";
    $("#result")
      .text(`Your ideal pet is a ${petSuggestion}`)
      .css("color", "blue");
    $("#petImage").attr("src", "img/1.jpg");
    lowMaintenancePetAnimation(); // Call the low-maintenance pet animation
  } else if (score <= 25) {
    petSuggestion = "Cat or Small-Medium Dog";
    $("#result")
      .text(`Your ideal pet is a ${petSuggestion}`)
      .css("color", "green");
    $("#petImage").attr("src", "img/2.jpg");
    mediumMaintenancePetAnimation(); // Call the medium-maintenance pet animation
  } else {
    petSuggestion = "Large Dog, Parrot, or Rabbit";
    $("#result")
      .text(`Your ideal pet is a ${petSuggestion}`)
      .css("color", "red");
    $("#petImage").attr("src", "img/3.jpg");
    highMaintenancePetAnimation(); // Call the high-maintenance pet animation
  }

  // After animations, show registration form
  setTimeout(() => {
    $("#registrationForm").show();
  }, 10000); // 10 seconds after animations start
}
