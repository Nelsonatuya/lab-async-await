const API_URL = "https://jsonplaceholder.typicode.com/posts";

function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    const listItem = document.createElement("li");
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading.textContent = post.title;
    paragraph.textContent = post.body;

    listItem.append(heading, paragraph);
    postList.append(listItem);
  });
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  displayPosts(posts);
}

fetchPosts();
