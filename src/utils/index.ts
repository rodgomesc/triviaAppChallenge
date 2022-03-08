export const stringBooleanToBooleanExpression = (
  value: "True" | "False"
): boolean => {
  if (value === "True") {
    return true;
  }
  if (value === "False") {
    return false;
  }
  throw new Error(`Invalid value for boolean expression: ${value}`);
};
