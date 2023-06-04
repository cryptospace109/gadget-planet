// Function to handle the dropdown menu
function handleDropdownMenu() {
    const dropdownItems = document.querySelectorAll('nav ul li');
  
    dropdownItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('ul');
        dropdown.style.display = 'block';
      });
  
      item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('ul');
        dropdown.style.display = 'none';
      });
    });
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    handleDropdownMenu();
  });
  