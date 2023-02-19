import { MutationTree } from 'vuex';
import { TasksStateInterface } from './state';

const mutation: MutationTree<TasksStateInterface> = {
  someMutation (/* state: TasksStateInterface */) {
    // your code
  }
};

export default mutation;
