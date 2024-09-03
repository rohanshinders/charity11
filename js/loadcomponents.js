document.addEventListener('DOMContentLoaded', function () {
    // Function to load HTML content
    function loadHTML(filePath, elementSelector) {
      fetch(filePath)
        .then(response => response.text())
        .then(data => {
          document.querySelector(elementSelector).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
    }
  
    // Load header and footer
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
  });
  