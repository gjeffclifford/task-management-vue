export interface TaskStateInterface {
  id: number,
  name: string,
  description: string
}
export interface TasksStateInterface {
  tasks: Array<TaskStateInterface>;
}

function state(): TasksStateInterface {
  return {
    tasks: []
  }
}

export default state;
