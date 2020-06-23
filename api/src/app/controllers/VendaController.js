import * as Yup from 'yup';
import Venda from '../models/Venda';

import moment from 'moment';

import Produto from '../models/Produto';
import Medicamento from '../models/Medicamento';
import Usuario from '../models/Usuario';


class VendaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      valor: Yup.number().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }


    moment.locale('pt-BR');

    const data = moment().format('D MMMM YYYY, h:mm:ss a')

    const { id, valor } = await Venda.create(req.body, data);

    return res.json({
      id,
      data,
      valor,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      data: Yup.date().required(),
      valor: Yup.number().required(),
      vendaId: Yup.number().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const venda = await Venda.findByPk(req.body.vendaId);

    const { id, data, valor } = await venda.update(req.body);

    return res.json({
      id,
      data,
      valor,
    });
  }

  async index(req, res) {
    const vendas = await Venda.findAll();

    return res.json(vendas);
  }

  async show(req, res) {
    const id = req.params.id;
    const venda = await Venda.findByPk(id);

    if (venda) {
      res.json(venda);
    }
    else {
      res.json({ message: 'Venda não encontrada' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const venda = await Venda.findByPk(id);

    if (venda) {
      venda.destroy();
      res.json({ message: 'Venda removido com sucesso' })
    }
    else {
      res.json({ message: 'Venda não encontrado' })
    }

  }

}

export default new VendaController();
