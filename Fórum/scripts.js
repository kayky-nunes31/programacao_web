document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("postTitle").value;
    const text = document.getElementById("postText").value;

    if (!title || !text) {
        alert("Please fill in both title and post text.");
        return;
    }

    if (text.length > 250) {
        alert("Post text cannot exceed 250 characters.");
        return;
    }

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    document.getElementById("posts").appendChild(postDiv);

    document.getElementById("postTitle").value = "";
    document.getElementById("postText").value = "";
});
