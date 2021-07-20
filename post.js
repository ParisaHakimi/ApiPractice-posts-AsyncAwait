const getAllPosts = async() => {
    let html = "";
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // console.log(response)
    const posts = await response.json();
    posts.forEach((post) => {
        html += ` <div class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;
        document.querySelector(".wrapper").innerHTML = html;

    });

}
getAllPosts();