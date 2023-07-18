// * Getting the card post to display
document.getElementById("new-post").addEventListener("click", function () {
  document.getElementById("create-card").style.display = "block";
});
// * If cancel hide the create post card
document.getElementById("cancel-btn").addEventListener("click", function () {
  document.getElementById("create-card").style.display = "none";
});

// * Post
const createFact = async (event) => {
  event.preventDefault();
  console.log("Ok")
  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();

  if (title && text) {
    const response = await fetch("/api/fact/meh", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.replace("/")
      console.log("Success")
    } else {
      alert("Error")
    }
  }
}

document
  .querySelector("#create-btn")
  .addEventListener("click", createFact);