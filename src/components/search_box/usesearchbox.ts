export const useSearchBox = (searchBox: HTMLDivElement): void => {
  const searchInput = searchBox.firstElementChild;

  searchInput?.addEventListener('input', (event) => {
    console.log(event.target.value);
  });
};
