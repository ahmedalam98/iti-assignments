$(document).ready(function () {
  $("#aboutBtn").click(function () {
    $("#aboutDiv").show();
    $("#galleryDiv, #servicesDiv, #complainDiv, #submittedDiv").hide();
  });

  $("#galleryBtn").click(function () {
    $("#galleryDiv").show();
    $("#aboutDiv, #servicesDiv, #complainDiv, #submittedDiv").hide();
  });

  /////////////////////////////
  // Dropdown Functionality //
  /////////////////////////////

  $("#servicesBtn").click(function () {
    $("#galleryDiv, #aboutDiv, #complainDiv, #submittedDiv").hide();

    $("#dropdownContent").toggle();
  });

  // Hide dropdown on clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown").length) {
      $("#dropdownContent").hide();
    }
  });

  /////////////////////////////
  // SlideShow Functionality //
  /////////////////////////////

  var currentImage = 1;
  var totalImages = 8;

  function showImage(index) {
    const imagePath = `./assets/${index}.jpg`;
    $("#slideshowImage").attr("src", imagePath);
  }

  function prevImage() {
    currentImage = currentImage > 1 ? currentImage - 1 : totalImages;
    showImage(currentImage);
  }

  function nextImage() {
    currentImage = currentImage < totalImages ? currentImage + 1 : 1;
    showImage(currentImage);
  }

  $("#prev").click(prevImage);

  $("#next").click(nextImage);

  /////////////////////////////
  // Form Functionality //
  /////////////////////////////

  $("#complainBtn").click(function () {
    $("#complainDiv").show();
    $("#aboutDiv, #galleryDiv, #servicesDiv, #submittedDiv").hide();
  });

  $("#submit").click(function () {
    // Get input values
    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const phone = $("#phoneInput").val();
    const complain = $("#complainInput").val();

    // Display submitted data
    $("#submittedName").text(`Name : ${name}`);
    $("#submittedEmail").text(`Email : ${email}`);
    $("#submittedPhone").text(`Phone : ${phone}`);
    $("#submittedComplain").text(`Complain : ${complain}`);

    $("#submittedDiv").show();
    $("#aboutDiv, #galleryDiv, #servicesDiv, #complainDiv").hide();
  });

  $("#backToEdit").click(function () {
    $("#complainDiv").show();
    $("#aboutDiv, #galleryDiv, #servicesDiv, #submittedDiv").hide();
  });
});
