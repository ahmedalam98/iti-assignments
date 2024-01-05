document.addEventListener("DOMContentLoaded", async function () {
  async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    // console.log(data);
    return data;
  }

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
  } catch (error) {
    console.error("Error fetching posts:", error);
    let output = `
      <div style="text-align: center; font-size: 28px;">
        <p>Failed to fetch data ❌</p>
      </div>
    `;
    document.getElementById("errorCase").innerHTML = output;
  }
});
