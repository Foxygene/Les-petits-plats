export const filterPill = (text: string, color: string):void => {
    const filterBox = document.querySelector<HTMLDivElement>('#filter_box');

    const pill = document.createElement('div');
    pill.classList.add('pill');
    pill.classList.add(color);
    pill.innerHTML =
    /*html*/
    `<span>${text}</span>
     <button>
     </button>`
     
     filterBox?.append(pill);
}