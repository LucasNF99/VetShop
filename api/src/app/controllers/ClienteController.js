import * as Yup from 'yup';
import Cliente from '../models/Cliente';

class ClienteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required().email(),
      telefone: Yup.string().required(),
      bairro: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      cpf: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const existsCpf = Cliente.findOne({ where: { cpf: req.body.cpf } })

    if (existsCpf) {
      return res.status(400).json({ error: 'CPF já utilizado' })
    }


    const { id, nome, email, telefone, bairro, rua, numero, cpf, avatar_id } = await Cliente.create(req.body);

    return res.json({
      id,
      nome,
      email,
      telefone,
      bairro,
      rua,
      numero,
      cpf
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string().email(),
      telefone: Yup.string(),
      bairro: Yup.string(),
      rua: Yup.string(),
      numero: Yup.string(),
      cpf: Yup.string(),
      clienteId: Yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const cliente = await Cliente.findByPk(req.body.clienteId);

    const { id, nome, email, telefone, bairro, rua, numero, cpf } = await cliente.update(req.body);

    return res.json({
      id,
      nome,
      email,
      telefone,
      bairro,
      rua,
      numero,
      cpf,
    });
  }

  async index(req, res) {
    const clientes = await Cliente.findAll();

    return res.json(clientes);
  }

  async show(req, res) {
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id);

    if (cliente) {
      res.json(cliente);
    }
    else {
      res.json({ message: 'Cliente não encontrado' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id);

    if (cliente) {
      cliente.destroy();
      res.json({ message: 'Cliente removido com sucesso' })
    }
    else {
      res.json({ message: 'Cliente não encontrado' })
    }

  }
}

export default new ClienteController();
