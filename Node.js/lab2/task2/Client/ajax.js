const btn = document.querySelector("button");

btn.addEventListener("click", fetchClientData);

function fetchClientData() {
  fetch("../Server/clients.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`There is an HTTP error : ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching clients data : ", error);
    });
}
