// * Getting the card post to display
document.getElementById("new-post").addEventListener("click", function () {
  document.getElementById("create-card").style.display = "block";
});
// * If cancel hide the create post card
document.getElementById("cancel-btn").addEventListener("click", function () {
  document.getElementById("create-card").style.display = "none";
});

// * Post
