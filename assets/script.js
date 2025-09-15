

          const searchBtn = document.getElementById("searchBtn");
          const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", () => {
    if (searchInput.classList.contains("hidden")) {
      // Show input
      searchInput.classList.remove("hidden", "w-0", "opacity-0");
      searchInput.classList.add("w-40", "opacity-100"); // width expands smoothly
      searchInput.focus();
    } else {
      // Hide input
      searchInput.classList.remove("w-40", "opacity-100");
      searchInput.classList.add("w-0", "opacity-0");
      setTimeout(() => {
        searchInput.classList.add("hidden"); // hide after animation
      }, 300); // match duration-300
    }
  });


document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slider = document.getElementById("slider");
  const slides = slider.children;
  const totalSlides = slides.length;

  function updateSlide() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  setInterval(nextSlide, 14000);

  // expose for buttons
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});


    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");

    function openMenu() {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
    }

    function closeMenu() {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    // Close when clicking overlay
    overlay.addEventListener("click", closeMenu);
  


  // Select all dropdown buttons
  const dropdownButtons = document.querySelectorAll('.mobile_dropdownmenu');

  dropdownButtons.forEach(btn => {
    const dropdown = btn.nextElementSibling; // <ul> next to the button

    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent click from closing immediately

      // Close other dropdowns except the one clicked
      document.querySelectorAll('.mobile_dropdownmenu + ul').forEach(menu => {
        if(menu !== dropdown) {
          menu.classList.add('hidden');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('hidden');
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.mobile_dropdownmenu + ul').forEach(menu => {
      menu.classList.add('hidden');
    });
  });


      const testimonials = [
        { quote: "GGGplatforms website and app division GGGTechlabs is the best organization to work with. I have been working with them for 11 months and enjoying every single day. The leadership is transparent, clear on direction, very well organized process oriented company.", name: "Anurag Parihar", company: "Right Way Films" },
        { quote: "Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies.", name: "Nabin Pathak", company: "Yak & Yeti Jewelry" },
        { quote: "Compellingly fashion low-risk high-yield thinking after synergistic users.", name: "Hemant Poudel", company: "Quick Adventure" },
        { quote: "Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies.", name: "Nandu Tiwari", company: "Sagarmatha Travels" },
        { quote: "Energistically engage diverse vortals and prospective methods of empowerment.", name: "Dominic Vijay Mathias", company: "Yak & Yeti" },
        { quote: "Affordable Digital Marketing Services deserves another AWARD for OUTSTANDING SERVICE and DESIGN.", name: "Vinod Khadka", company: "Nasha Restro Bar" },
        { quote: "I’ve been consistently impressed with their process, organization and strategic method of doing SEO.", name: "Rahul Jaisi", company: "Trust Genic Group" }
      ];
      function changeTestimonial(index) {
        document.getElementById("quote").innerText = `"${testimonials[index].quote}"`;
        document.getElementById("name").innerText = testimonials[index].name;
        document.getElementById("company").innerText = testimonials[index].company;
      }

  