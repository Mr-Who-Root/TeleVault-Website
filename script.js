/**
 * TeleVault website — theme toggle and footer year.
 * Theme follows the system setting (like the app) until the visitor picks one;
 * the choice is shared with the privacy policy site via the same storage key.
 */
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('themeToggle');
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function storedTheme() {
    try {
      const t = localStorage.getItem('televault_theme');
      return t === 'light' || t === 'dark' ? t : null;
    } catch (e) {
      return null;
    }
  }

  function currentTheme() {
    return storedTheme() || (darkQuery.matches ? 'dark' : 'light');
  }

  function renderToggle(theme) {
    if (!toggle) return;
    toggle.innerHTML = theme === 'light'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
    toggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
  }

  renderToggle(currentTheme());
  darkQuery.addEventListener?.('change', () => {
    if (!storedTheme()) renderToggle(currentTheme());
  });

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('televault_theme', next); } catch (e) {}
      renderToggle(next);
    });
  }
});
