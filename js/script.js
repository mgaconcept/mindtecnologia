/*
 * script.js – Versão corrigida
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav .nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        console.log('🔽 Menu recolhido');
      } else {
        navLinks.classList.add('open');
        console.log('🔼 Menu expandido');
      }
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        console.log('✅ Menu fechado após clique em link');
      });
    });
  } else {
    console.warn('⚠️ menu-toggle ou nav-links não encontrado no DOM!');
  }

  // 🎨 VARIAÇÃO DINÂMICA DE FUNDO DA HERO
  const imagensHero = [
    "banner_header.png",
    "banner_header2.png",
    "banner_header3.png",
    "banner_header4.png"
  ];
  const escolhida = imagensHero[Math.floor(Math.random() * imagensHero.length)];
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.backgroundImage = `url('assets/img/${escolhida}')`;
  }

  // ✨ FASE 9 – Fade-in para cards e tabelas
  const fadeTargets = document.querySelectorAll('.card, .plan-table tr');
  fadeTargets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeTargets.forEach(el => observer.observe(el));
});
