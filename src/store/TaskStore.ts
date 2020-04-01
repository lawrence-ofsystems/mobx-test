import {observable, computed, autorun} from "mobx";
import Task from "./Task";

export class TaskStore {
    @observable taskList: Task[] = [];

    constructor() {
        autorun(() => console.log(this.report));
    }

    @computed get completedTaskCount() {
        return this.taskList.filter(task => task.completed === true).length;
    }

    @computed get report() {
        if (!this.taskList || this.taskList.length === 0) {
            return "No tasks!";
        } else {
            return `Completed ${this.completedTaskCount} ot ${this.taskList.length} tasks`;
        }
    }

    addTask(description:string | null ) {
        if (description) {
            this.taskList.push(
                {
                    description: description,
                    completed: false,
                    assignee: null
                }
            );
        }
    }

    removeCompleted() {
        this.taskList = this.taskList.filter( (task) => !task.completed);
    }
}

export const taskStore = new TaskStore();