import { state } from './state';
import { createStore } from 'vuex';
import API from './request.ts';

export default createStore({
  state,
  mutations: {
    getClient: async (state) => {
      return API('get', `http://localhost:5000/client/v1/read`, {}).then((res: any) => {
        state.tableData.list = res.data.rows;
        state.tableData.total = res.data.count;
        return res.data.rows;
      });
    },
  },
  actions: {},
  modules: {},
  getters: {
    tableList: (state: any) => {
      return state.tableData.list;
    },
  },
});
