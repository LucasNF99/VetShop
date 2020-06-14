export default axios => ({
  list: () => axios.get('usuario'),
  get: payload => axios.get(`usuario/${payload}`),
  update: payload => axios.put('usuario', payload),
  create: payload => axios.post('usuario', payload),
  delete: payload => axios.delete(`usuario/${payload}`),
});
