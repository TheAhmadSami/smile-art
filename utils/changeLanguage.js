
export const changeLang = (lang) => {
  localStorage.setItem('lang', lang);
  window.location.reload();
}