const menuIcon = document.querySelector(".hamburger");

const navbarList = document.getElementById("navbarlist");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbarList.classList.toggle("active");
});



const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', () => {
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) {
        searchInput.focus();
      }
    });

<!-- ===== Form Script ===== -->
<script>
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.textContent = "Thank you! Your message has been sent successfully.";
        form.reset();
    } else {
        status.textContent = "Oops! Something went wrong. Please try again.";
    }
});
</script>

