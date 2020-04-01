import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import Task from "../store/Task";

type Props = {
    task: Task
}

const TaskView: FunctionComponent<Props> = observer((props: Props) => {
    const task: Task = props.task;
    return (
        <li onDoubleClick={ () => task.description = prompt("Edit task description", task.description) || task.description }>
            <input
                type={'checkbox'}
                checked={ task.completed }
                onChange={ () => task.completed = !task.completed }
            />
            <span>
                { task.description }
            </span>
            <span>
                { task.assignee
                    ? <small>{ task.assignee.name }</small>
                    : 'unassigned'
                }
            </span>
        </li>
    );
});

export default TaskView;