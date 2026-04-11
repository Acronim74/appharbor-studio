// i18n switcher — add keys per page
const i18n = {
  en: {},
  ru: {}
};

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang]?.[key]) el.textContent = i18n[lang][key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
});
