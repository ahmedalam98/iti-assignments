document.addEventListener("DOMContentLoaded", function () {
  // Create object from xmlHttpRequest
  var xhr = new XMLHttpRequest();

  // Defined method, url
  xhr.open("GET", "./rockbands.json");

  // Set up a callback function to handle the response
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        var data = JSON.parse(xhr.responseText);
        console.log(data);

        populateBandSelect(data);
      }
    }
  };

  function populateBandSelect(bands) {
    var bandSelect = document.getElementById("bandSelect");

    for (var band in bands) {
      if (bands.hasOwnProperty(band)) {
        var option = document.createElement("option");
        option.value = band.toLowerCase();
        option.textContent = band;
        bandSelect.appendChild(option);
      }
    }

    // Initial population of artist select
    populateArtistSelect(bands[bandSelect.value]);

    // Change artists for band select change
    bandSelect.addEventListener("change", function () {
      populateArtistSelect(bands[bandSelect.value]);
    });
  }

  function populateArtistSelect(artists) {
    var artistSelect = document.getElementById("artistSelect");

    // Clear previous options
    artistSelect.innerHTML = "";

    artists.forEach(function (artist) {
      var option = document.createElement("option");
      option.value = artist.value;
      option.textContent = artist.name;
      artistSelect.appendChild(option);
    });
  }

  function gotToLink() {
    var artistSelect = document.getElementById("artistSelect");
    var url = artistSelect.value;

    // console.log(selectedArtist);
    window.open(url);
  }

  document.getElementById("btn").addEventListener("click", gotToLink);

  // Send the request
  xhr.send();
});
