export const filterPill = (text: string, color: string):void => {
    const filterBox = document.querySelector<HTMLDivElement>('#filter_box');

    const pill = document.createElement('div');
    pill.classList.add('pill');
    pill.classList.add(color);

    const pillText = document.createElement('span');
    pillText.textContent = text;

    const pillButton = document.createElement('button');
    pillButton.addEventListener('click', () => pill.remove())

    pill.append(pillText, pillButton)

     filterBox?.append(pill);
}