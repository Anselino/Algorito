// Funcionalidad para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  
  if (navToggle) {
    let isMenuOpen = false;
    const mobileMenu = document.createElement('nav');
    mobileMenu.className = 'nav-mobile-menu';
    mobileMenu.style.display = 'none';
    mobileMenu.style.position = 'absolute';
    mobileMenu.style.top = '100%';
    mobileMenu.style.left = '0';
    mobileMenu.style.width = '100%';
    mobileMenu.style.backgroundColor = 'white';
    mobileMenu.style.padding = '1rem';
    mobileMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    mobileMenu.style.zIndex = '50';
    
    // Crear los elementos del menú
    mobileMenu.innerHTML = `
      <ul class="nav-menu" style="flex-direction: column; gap: 1rem;">
        <li><a href="index.html" class="nav-link active">Inicio</a></li>
        <li><a href="servicios.html" class="nav-link">Servicios</a></li>
        <li><a href="casos-uso.html" class="nav-link">Casos de Uso</a></li>
        <li><a href="demos.html" class="nav-link">Demos</a></li>
        <li><a href="opiniones.html" class="nav-link">Opiniones</a></li>
        <li><a href="agendar-llamada.html" class="nav-link">Agendar Llamada</a></li>
        <li><a href="acerca-de.html" class="nav-link">Acerca de</a></li>
        <li>
          <div class="language-switcher">
            <button class="language-btn active">🇪🇸 ES</button>
            <button class="language-btn">🇬🇧 EN</button>
          </div>
        </li>
      </ul>
    `;
    
    // Insertar el menú después del header
    const header = document.querySelector('header');
    header.appendChild(mobileMenu);
    
    // Manejar el clic en el botón de menú
    navToggle.addEventListener('click', function() {
      isMenuOpen = !isMenuOpen;
      mobileMenu.style.display = isMenuOpen ? 'block' : 'none';
      
      // Cambiar el ícono del botón
      navToggle.innerHTML = isMenuOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    });
  }
  
  // Funcionalidad para el cambio de idioma
  const languageBtns = document.querySelectorAll('.language-btn');
  
  languageBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remover la clase active de todos los botones
      languageBtns.forEach(b => b.classList.remove('active'));
      
      // Añadir la clase active al botón clickeado
      this.classList.add('active');
      
      // Aquí se implementaría la lógica para cambiar el idioma
      const lang = this.textContent.includes('ES') ? 'es' : 'en';
      console.log(`Cambiando idioma a: ${lang}`);
      
      // En una implementación real, aquí se cargarían las traducciones
      // y se actualizarían los textos de la página
    });
  });
});
