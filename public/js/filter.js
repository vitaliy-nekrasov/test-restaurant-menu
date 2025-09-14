document.querySelectorAll('.category-filters button').forEach(btn => {
  btn.addEventListener('click', function() {
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
