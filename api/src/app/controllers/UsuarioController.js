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

    const existsCpf = Usuario.findOne({ where: { cpf: req.body.cpf } })

    if (existsCpf) {
      return res.status(400).json({ error: 'CPF já utilizado' })
    }


    const { id, nome, email, senha, telefone, bairro, rua, numero, cpf, avatar_id } = await Usuario.create(req.body);

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
      avatar_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string().email(),
      senha: Yup.string(),
      telefone: Yup.string(),
      bairro: Yup.string(),
      rua: Yup.string(),
      numero: Yup.string(),
      cpf: Yup.string(),
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
