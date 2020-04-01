import User from "./User";

export default interface Task {
    description: string,
    completed: boolean,
    assignee: User | null
};