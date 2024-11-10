const applyTheme = (theme) => {
    const target = document.querySelector(`[data-theme="${theme}"]`);
  
    document.documentElement.setAttribute("data-selected-theme", theme);
  
    document.querySelector('[data-theme][aria-pressed="true"]')
      .setAttribute('aria-pressed', 'false');
  
    target.setAttribute('aria-pressed', 'true');
  };
  
  const handleThemeSelection = (event) => {
    const target = event.target;
    const isPressed = target.getAttribute('aria-pressed');
  
    if (isPressed !== "true") {
      const theme = target.getAttribute('data-theme');
      applyTheme(theme);
      localStorage.setItem('selected-theme', theme);
    }
  };
  
  const savedTheme = localStorage.getItem('selected-theme');
  const defaultTheme = "green";
  
  if (savedTheme && savedTheme !== defaultTheme) {
    applyTheme(savedTheme);
  }
  
  const buttons = document.querySelectorAll('.theme-switcher button');
  buttons.forEach((button) => {
    button.addEventListener('click', handleThemeSelection);
  });
  
  