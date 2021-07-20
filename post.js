const wrapper = document.querySelector(".wrapper");
const getAllPosts = async() => {
    let html = "";
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    posts.forEach((post) => {
        html += ` <div class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;
    });

    wrapper.innerHTML = html;
};
// click on single post and show the single post
wrapper.addEventListener('click', async(e) => {
    if (e.target.className === "post") {
        wrapper.innerHTML = `<div class="spinner"></div>`;
        const postId = e.target.dataset.id;
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const response = await fetch(apiUrl);
        const singlePost = await response.json();
        wrapper.innerHTML = ` <div class="singlePost">
        <h1>${singlePost.title}</h1>
        <p>${singlePost.body}</p>
        <button class="show-all">show all posts</button>
    </div>`
    }
})

// click on show all button
document.addEventListener('click', (e) => {
    if (e.target.className === "show-all") {
        wrapper.innerHTML = `<div class="spinner"></div>`;
        getAllPosts();
    }
})
getAllPosts();