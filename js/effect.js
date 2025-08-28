// لتشغيل الsubmenu
document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function(element){
  element.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    let submenu = this.nextElementSibling;
    if(submenu){
      submenu.classList.toggle('show');
    }
  });
});
//nav

  window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {   // يبدأ التغيير بعد ما تنزل 50px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".nav-link[href='#Home']").classList.add("active");
  });

const lightbox = GLightbox({
    selector: '.glightbox'
  });
  document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const portfolioItems = document.querySelectorAll('.masonry-item'); // ✅ تعديل
  const portfolioSection = document.getElementById('portfolio');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.add('show');
          item.style.display = "block"; // ✅ يظهر العنصر
        } else {
          item.classList.remove('show');
          item.style.display = "none"; // ✅ يخفي العنصر
        }
      });

      if (filterValue === 'all') {
        portfolioSection.classList.remove('filtered');
      } else {
        portfolioSection.classList.add('filtered');
      }
    });
  });
});
  AOS.init({
    duration: 1000, 
    once: true      
  });


