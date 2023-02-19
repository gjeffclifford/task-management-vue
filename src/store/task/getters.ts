import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TasksStateInterface } from './state';

const getters: GetterTree<TasksStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
