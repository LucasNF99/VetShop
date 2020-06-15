export default axios => ({
  list: () => axios.get('prontuario'),
  get: payload => axios.get(`prontuario/${payload}`),
  update: payload => axios.put('prontuario', payload),
  create: payload => axios.post('prontuario', payload),
  delete: payload => axios.delete(`prontuario/${payload}`),
});
