import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../src/config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'token não provisionado' });
  }

  const [, token] = authHeader.split(' ');
  console.log(token);

  try {
    const { id } = await promisify(jwt.verify)(token, authConfig.secret);
    console.log(id);

    req.usuarioId = id;

    return next();
  }
  catch (err) {

    return res.status(401).json({ error: 'token invalido' });

  }
};