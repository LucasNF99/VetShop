import * as Yup from 'yup';
import Produto from '../models/Produto';

class ProdutoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      quantidade: Yup.number().required(),
      descricao: Yup.string().required(),
      precoCompra: Yup.number().required(),
      precoVenda: Yup.number().required(),
      fornecedor: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { id, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor } = await Produto.create(req.body);

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
      produtoId: Yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const produto = await Produto.findByPk(req.body.produtoId);

    const { id, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor } = await produto.update(req.body);

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
}

export default new ProdutoController();
