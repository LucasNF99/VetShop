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

    // Validade Usuario
    const existUsuario = await Usuario.findByPk(req.body.usuario_id);

    if (!existUsuario) {
      return res.status(400).json({ error: 'Usuario é um campo obrigatório' })
    }

    //Validate Produto

    const { produtos = [], medicamentos = [], valor } = req.body

    for (const produto of produtos) {
      const produtoData = await Produto.findByPk(produto.id);
      if (produtoData) {
        if (produto.quantidade <= produtoData.quantidade) {
          produtoData.quantidade -= produto.quantidade
          await produtoData.save()
        }
        else {
          return res.status(400).json({ error: 'Quantidade vendida não pode ser superior a quantidade disponível em estoque' })
        }
      }
    }



    for (const medicamento of medicamentos) {
      const medicamentoData = await Medicamento.findByPk(medicamento.id);
      if (medicamentoData) {
        if (medicamento.quantidade <= medicamentoData.quantidade) {
          medicamentoData.quantidade -= medicamento.quantidade
          await medicamentoData.save()
        }
        else {
          return res.status(400).json({ error: 'Quantidade vendida não pode ser superior a quantidade disponível em estoque' })
        }
      }
    }



    moment.locale('pt-BR');
    const data = moment().format('D MMMM YYYY, h:mm:ss a')

    const { id } = await Venda.create({ ...req.body, data, valor });

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
