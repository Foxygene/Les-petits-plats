export const filterPill = (text: string, color: string): string => /*html*/ `
  <div class='pill ${color}'>
    <span>${text}</span>
    <button class='close_pill_button'>
      <img src='./closeicon.svg'>
    </button>
  </div>
  `;
