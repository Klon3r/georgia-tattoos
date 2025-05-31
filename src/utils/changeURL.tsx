export const changeURL = (location: string, openNewTab?: boolean) => {
  openNewTab
    ? window.open(location, "_blank")
    : (window.location.href = location);
};
