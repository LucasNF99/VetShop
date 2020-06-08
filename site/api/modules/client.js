export default axios => ({
  list: () => axios.get('cliente'),
  get: payload => axios.get(`cliente/${payload}`),
  update: payload => axios.put('cliente', payload),
  create: payload => axios.post('cliente', payload),
  delete: payload => axios.delete(`cliente/${payload}`),
});
