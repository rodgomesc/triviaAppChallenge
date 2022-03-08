import { stringBooleanToBooleanExpression } from "../../utils";

describe("utils", () => {
  it("should return true when string is 'True'", () => {
    expect(stringBooleanToBooleanExpression("True")).toBe(true);
  });

  it("should return false when string is 'False'", () => {
    expect(stringBooleanToBooleanExpression("False")).toBe(false);
  });

  it("should trown an error if string is not 'True' or 'False'", () => {
    expect(() =>
      stringBooleanToBooleanExpression("anythingElse" as any)
    ).toThrow(new Error("Invalid value for boolean expression: anythingElse"));
  });
});
