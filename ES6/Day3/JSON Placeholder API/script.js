document.addEventListener("DOMContentLoaded", function () {
  const myBtn = document.getElementById("btn");

  myBtn.addEventListener("click", async function () {
    try {
      let data = await getPosts();

      let output = "";
      data.forEach((post) => {
        output += `
          <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
          </tr>
        `;
      });

      document.getElementById("outputBody").innerHTML = output;
      document.getElementById("errorCase").innerHTML = "";
    } catch (error) {
      console.error("Error fetching posts:", error);
      let output = `Failed to fetch data ❌`;
      document.getElementById("errorCase").innerHTML = output;
    }
  });

  async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    return data;
  }
});
