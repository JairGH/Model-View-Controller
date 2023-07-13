const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("User has signup");
  const userName = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#loginBtn")
  .addEventListener("submit", signupFormHandler);
