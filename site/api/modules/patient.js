export default axios => ({
  list: () => axios.get('paciente'),
  get: payload => axios.get(`paciente/${payload}`),
  update: payload => axios.put('paciente', payload),
  create: payload => axios.post('paciente', payload),
  delete: payload => axios.delete(`paciente/${payload}`),
});
