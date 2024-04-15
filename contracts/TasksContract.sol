//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TasksContract {
    uint public taskCount = 0;

    constructor() {
        createTask("Mi primer tarea", "Esta es una tarea de prueba");
    }

    struct Task {
        uint256 id;
        string content;
        string description;
        bool done;
        uint256 createdAt;
    }

    mapping(uint256 => Task) public tasks;

    function createTask(
        string memory _tittle,
        string memory _description
    ) public {
        taskCount++;
        tasks[taskCount] = Task(
            taskCount,
            _tittle,
            _description,
            false,
            block.timestamp
        );
    }

    function toogleDone(uint _id) public {
        Task memory _task = tasks[_id];
        _task.done = !_task.done;
        tasks[_id] = _task;
    }
}
