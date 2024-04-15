const taskContract = artifacts.require("TasksContract");

contract("TaskContract", () => {
  before(async () => {
    this.taskContract = await taskContract.deployed();
  });

  if (
    ("migrate deployed successfully",
    async () => {
      const address = this.taskContract.address;

      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    })
  );
});
