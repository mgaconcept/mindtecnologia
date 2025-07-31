document.addEventListener('DOMContentLoaded', () => {
  alert('JS carregado!'); // Teste simples

  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      alert('Menu clicado!');
    });
  }
});
