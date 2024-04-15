const taskContract = artifacts.require("TasksContract");

contract("TaskContract", () => {
  //ANTES DE LAS PRUEBAS SETEA A UNA VARIABLE EL CONTRATO DEPLOYADO
  before(async () => {
    this.taskContract = await taskContract.deployed();
  });

  //PRUEBA DE QUE EL CONTRATO SE DEPLOYO CORRECTAMENTE - VERIFICA QUE LA DIRECCION NO SEA 0x0
  it("migrate deployed successfully", async () => {
    const address = this.taskContract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  //PRUEBA DE QUE SE PUEDE CREAR UNA TAREA
  it("get tasks list", async () => {
    const taskCounter = await this.taskContract.taskCount();
    const task = await this.taskContract.tasks(taskCounter);
    assert.equal(task.id.toNumber(), taskCounter);
  });
});
