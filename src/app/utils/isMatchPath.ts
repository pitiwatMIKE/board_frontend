export const isMatchPathname = (pathname: string, menuPath: string) => {
  const regex = new RegExp(`^${menuPath}$`);
  const isMatch = regex.test(pathname);
  return isMatch;
};
