document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("postID").addEventListener("click", function (event) {
    event.preventDefault();

    var userInput = document.getElementById("post-input-id").value;

    var newPost = document.createElement("div");
    newPost.className = "new-post";
    newPost.style.marginBottom = "15px";

    newPost.innerHTML = `
        <div class="post-header">
          <div class="post-person">
            <img src="./assets/images/postHeader.png" alt="" />
          </div>
        </div>
        <div class="post-input">
          <textarea readonly>${userInput}</textarea>
        </div>
      `;

    var container = document.getElementById("new-posts-list");
    var firstChild = container.firstChild;

    container.insertBefore(newPost, firstChild);

    document.getElementById("post-input-id").value = "";
  });
});
