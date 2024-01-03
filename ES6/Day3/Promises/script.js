document.addEventListener("DOMContentLoaded", function () {
  async function getBands() {
    try {
      var response = await fetch("./rockbands.json");
      var data = await response.json();
      populateBandSelect(data);
      return data;
    } catch (error) {
      console.error("An error occurred:", error.message);

      throw error;
    }
  }
  getBands();

  /////////////////////////////////////////////////////////////////

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
});
