export default axios => ({
  list: () => axios.get('produto'),
  get: payload => axios.get(`produto/${payload}`),
  update: payload => axios.put('produto', payload),
  create: payload => axios.post('produto', payload),
  delete: payload => axios.delete(`produto/${payload}`),
});
