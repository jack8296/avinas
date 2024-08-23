// Animation for low-maintenance pets (Fish, Reptile, Rodent)
function lowMaintenancePetAnimation() {
  $("#petImage").fadeIn(1000, function () {
    $(this)
      .animate(
        {
          width: "150px",
          height: "150px",
          opacity: 0.8,
        },
        3000
      )
      .fadeOut(3000);
  });
}

// Animation for medium-maintenance pets (Cat, Small-Medium Dog)
function mediumMaintenancePetAnimation() {
  $("#petImage").slideDown(1000, function () {
    $(this)
      .animate(
        {
          width: "250px",
          height: "250px",
          marginLeft: "20px",
        },
        3000
      )
      .slideUp(3000);
  });
}

// Animation for high-maintenance pets (Large Dog, Parrot, Rabbit)
function highMaintenancePetAnimation() {
  $("#petImage")
    .css({ position: "relative" })
    .fadeIn(1000, function () {
      $(this)
        .animate(
          {
            left: "+=100px",
            width: "300px",
            height: "300px",
          },
          3000
        )
        .fadeOut(3000);
    });
}
