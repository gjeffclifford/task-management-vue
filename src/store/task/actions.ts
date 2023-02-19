import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { TasksStateInterface } from './state';

const actions: ActionTree<TasksStateInterface, StateInterface> = {
  async getTasks ({}, params) {
    return await api.get(`${process.env.TASK_API}/v1/tasks`, {params}).then((response) => {
      return response.data
    })
  },
  async createTask ({}, payload) {
    return await api.post(`${process.env.TASK_API}/v1/tasks`, payload).then((response) => {
      return response.data
    })
  },
  async getTask ({}, id) {
    return await api.get(`${process.env.TASK_API}/v1/tasks/${id}`).then((response) => {
      return response.data
    })
  },
  async updateTask ({}, data) {
    return await api.put(`${process.env.TASK_API}/v1/tasks/${data.id}`, data.data).then((response) => {
      return response.data
    })
  },
  async deleteTask ({}, id) {
    return await api.delete(`${process.env.TASK_API}/v1/tasks/${id}`).then((response) => {
      return response
    })
  }
};

export default actions;
