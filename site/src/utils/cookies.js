import { Cookies } from 'quasar';

export default (cookie, type, value, expire) => {
  switch (type) {
    case 'get':
      return Cookies.get(`vet_${cookie}`);
    case 'has':
      return Cookies.has(`vet_${cookie}`);
    case 'set':
      Cookies.set(`vet_${cookie}`, value, { expires: expire || null });
      break;
    case 'remove':
      Cookies.remove(`vet_${cookie}`);
      break;
    default:
      break;
  }

  return false;
};
