export const gatherFilter = () => {
  const pills = document.querySelectorAll('.pill');

  const inFilter = [];
  const apFilter = [];
  const usFiler = [];

  pills.forEach((pill) => {
    if (pill.classList[1] === 'bg_blue') inFilter.push(pill.firstElementChild?.innerHTML);
    if (pill.classList[1] === 'bg_green') apFilter.push(pill.firstElementChild?.innerHTML);
    if (pill.classList[1] === 'bg_red') usFiler.push(pill.firstElementChild?.innerHTML);
  });

  return [inFilter, apFilter, usFiler];
};
