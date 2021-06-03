import rootService from './root.service';

describe("root.service", () => {
  it("findAll returns msg", async () => {
    const response = await rootService.findAll();
    expect(response.msg).toEqual("Hello");
  });
});
