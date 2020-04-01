import {observer} from "mobx-react";
import React, {FunctionComponent} from "react";
import {TaskStore} from "../store/TaskStore";
import TaskView from "./TaskView";
import Task from "../store/Task";

type Props = {
    taskStore: TaskStore
}

export const TaskList: FunctionComponent<Props> = observer((props: Props) => {
    const taskStore = props.taskStore;
    return (
        <div>
            <h1>Task Tracker</h1>
            <h2>Things to Do</h2>
            <button onClick={ () => props.taskStore.addTask(prompt("Enter new task name", "Take a break")) }>
                Add
            </button>
            <ul>
                {
                    taskStore.taskList
                        .filter((task) => !task.completed)
                        .map((task: Task, idx: number) => <TaskView key={ idx } task={ task }/>)
                }
            </ul>
            <h2>Done and Dusted</h2>
            <button onClick={ () => props.taskStore.removeCompleted() }>Clear</button>
            {
                taskStore.taskList
                    .filter((task) => task.completed)
                    .map((task: Task, idx: number) => <TaskView key={ idx } task={ task }/>)
            }
            <h2>Summary</h2>
            { taskStore.report }
        </div>
    );
});