// Fungsi untuk melakukan pencarian
function searchComponents(query) {
  const components = document.querySelectorAll("#componentGrid > a");
  console.log(query);
  components.forEach((component) => {
    const text = component.querySelector("p").textContent.toLowerCase();

    if (text.includes(query)) {
      component.style.display = "flex";
    } else {
      component.style.display = "none";
    }
  });
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  searchComponents(query);
}

document.getElementById("default-search").addEventListener("keyup", handleSearch);
