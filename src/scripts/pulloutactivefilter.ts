export const pullOutActiveFilter = (options: string[], activeFilters: string[]): string[] =>
  options.filter((option) => !activeFilters.includes(option));
