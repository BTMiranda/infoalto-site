function scrollToTop(event) {
    event.preventDefault(); // Evita o comportamento padrão do hiperlink
  
    var element = document.documentElement || document.body;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }