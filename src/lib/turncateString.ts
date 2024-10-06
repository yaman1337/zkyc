export const truncateString = (
  varString: string | undefined,
  leftString: number,
  rightString: number
): string => {
  if (!varString) return "";
  return varString.slice(0, leftString) + "..." + varString.slice(-rightString);
};
