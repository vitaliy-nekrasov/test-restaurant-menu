document.addEventListener('DOMContentLoaded', function () {
  const filters = document.querySelectorAll('#category-filters button');
  filters.forEach(btn => {
    btn.addEventListener('click', function () {
      filters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      document.querySelectorAll('.menu-category').forEach(section => {
        if (filter === 'all' || section.dataset.category === filter) {
          section.style.display = '';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
  
  if (filters.length) filters[0].classList.add('active');
});
