import { lambdaHandler } from "../src/handler";
import { assert } from "chai";

describe("Handler", () => {
  const dummyEvent: any = {};

  it("should return 200 always!", async () => {
    const result = await lambdaHandler(dummyEvent);
    assert.deepEqual(result.statusCode , 200);
  });
});
