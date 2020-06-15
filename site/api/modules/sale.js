export default axios => ({
  list: () => axios.get('venda'),
  get: payload => axios.get(`venda/${payload}`),
  update: payload => axios.put('venda', payload),
  create: payload => axios.post('venda', payload),
  delete: payload => axios.delete(`venda/${payload}`),
});
