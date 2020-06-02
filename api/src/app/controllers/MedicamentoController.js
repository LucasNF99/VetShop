import * as Yup from 'yup';
import Medicamento from '../models/Medicamento';

class MedicamentoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      quantidade: Yup.number().required(),
      descricao: Yup.string().required(),
      precoCompra: Yup.number().required(),
      precoVenda: Yup.number().required(),
      fornecedor: Yup.string().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const { id, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor } = await Medicamento.create(req.body);

    return res.json({
      id,
      nome,
      quantidade,
      descricao,
      precoCompra,
      precoVenda,
      fornecedor
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      quantidade: Yup.number(),
      descricao: Yup.string(),
      precoCompra: Yup.number(),
      precoVenda: Yup.number(),
      fornecedor: Yup.string(),
      medicamentoId: Yup.number().required(),
    })
    console.log(req.body);
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const medicamento = await Medicamento.findByPk(req.body.medicamentoId);

    const { id, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor } = await medicamento.update(req.body);

    return res.json({
      id,
      nome,
      quantidade,
      descricao,
      precoCompra,
      precoVenda,
      fornecedor
    });
  }

  async index(req, res) {
    const medicamentos = await Medicamento.findAll();

    return res.json(medicamentos);
  }

  async show(req, res) {
    const id = req.params.id;
    const medicamento = await Medicamento.findByPk(id);

    if (medicamento) {
      res.json(medicamento);
    }
    else {
      res.json({ message: 'Medicamento não encontrado' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const medicamento = await Medicamento.findByPk(id);

    if (medicamento) {
      medicamento.destroy();
      res.json({ message: 'Medicamento removido com sucesso' })
    }
    else {
      res.json({ message: 'Medicamento não encontrado' })
    }

  }

}

export default new MedicamentoController();
