import * as Yup from 'yup';
import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required().email(),
      senha: Yup.string().required(),
      telefone: Yup.string().required(),
      bairro: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      cpf: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { id, nome, email, senha, telefone, bairro, rua, numero, cpf } = await Usuario.create(req.body);

    return res.json({
      id,
      nome,
      email,
      senha,
      telefone,
      bairro,
      rua,
      numero,
      cpf,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required().email(),
      senha: Yup.string().required(),
      telefone: Yup.string().required(),
      bairro: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      cpf: Yup.string().required(),
      usuarioId: Yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const usuario = await Usuario.findByPk(req.body.usuarioId);

    const { id, nome, email, senha, telefone, bairro, rua, numero, cpf } = await usuario.update(req.body);

    return res.json({
      id,
      nome,
      email,
      senha,
      telefone,
      bairro,
      rua,
      numero,
      cpf,
    });
  }
}

export default new UsuarioController();
