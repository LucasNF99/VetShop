import * as Yup from 'yup';
import Produto from '../models/Produto';

class ProdutoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      quantidade: Yup.string().required(),
      descricao: Yup.string().required(),
      precoCompra: Yup.string().required(),
      precoVenda: Yup.string().required(),
      fornecedor: Yup.string().required(),

    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { idProduto, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor } = await Produto.create(req.body);

    return res.json({
      idProduto,
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
      quantidade: Yup.integer(),
      descricao: Yup.string(),
      precoCompra: Yup.float(),
      precoVenda: Yup.float(),
      fornecedor: Yup.string(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const produto = await Produto.findByPk(req.produtoId);

    const { idProduto, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor } = await produto.update(req.body);

    return res.json({
      idProduto,
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
