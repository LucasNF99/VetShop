export default axios => ({
  login: payload => axios.post('sessions', payload),
});
