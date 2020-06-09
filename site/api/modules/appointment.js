export default axios => ({
  list: () => axios.get('consulta'),
  get: payload => axios.get(`consulta/${payload}`),
  update: payload => axios.put('consulta', payload),
  create: payload => axios.post('consulta', payload),
  delete: payload => axios.delete(`consulta/${payload}`),
});
