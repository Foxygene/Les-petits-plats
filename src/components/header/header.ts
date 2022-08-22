export const header = (title = 'Les petits plats', src = './logo.svg'): string =>
  /*html*/
  `<header>
    <img src="${src}"alt="Logo">
    <h1>${title}</h1>
  </header>`;
