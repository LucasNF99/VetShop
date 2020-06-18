import jwt from 'jsonwebtoken';
import { promissify } from 'util';

import authConfig from '../src/config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'token não provisionado' });
  }

  const [, token] = authHeader.split(' ');

  const teste = ''

  try {
    teste = await promissify(jwt.verify)(token, authConfig.secret);

    req.usuarioId = teste.id;

    return next();
  }
  catch (err) {

    return res.status(401).json({ error: 'token invalido' });

  }


};