let FF_FOUC_FIX;

// Function to load a template and inject it into a specific container
function loadTemplate(templatePath, containerId) {
    fetch(templatePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error fetching template:', error));
}

// Load the header and footer templates
loadTemplate('./templates/header.html', 'header-container');
loadTemplate('./templates/footer.html', 'footer-container');


let lastScrollTop = 0; // Store the last scroll position

window.onscroll = function() {
  const header = document.getElementById("header-nav");
  const currentScroll = document.documentElement.scrollTop;
  
  if (header != null){
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add("hidden-header");
    } else {
        header.classList.remove("hidden-header");
    }
  }

  lastScrollTop = currentScroll;
};