// User Registration Handling
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("signup-message").textContent =
      "Registration successful!";
  });

// Book Search Functionality
document.getElementById("search-bar").addEventListener("input", function () {
  let query = this.value.toLowerCase();
  document.querySelectorAll(".branch").forEach((branch) => {
    let branchName = branch.getAttribute("data-branch");
    let textContent = branch.textContent.toLowerCase();
    branch.style.display =
      textContent.includes(query) || branchName.includes(query)
        ? "block"
        : "none";
  });
});

// Solution Upload Handling
document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Solution uploaded for teacher approval.");
  });
//
// document.getElementById("signup-form")?.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Registration successful!");
// });
