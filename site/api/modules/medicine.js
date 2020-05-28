export default axios => ({
  list: () => axios.get('medicamento'),
  get: payload => axios.get(`medicamento/${payload}`),
  update: payload => axios.put('medicamento', payload),
  create: payload => axios.post('medicamento', payload),
  delete: payload => axios.delete(`medicamento/${payload}`),
});
