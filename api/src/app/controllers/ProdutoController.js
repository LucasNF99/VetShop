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
      classe: Yup.string(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const { id, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor, classe } = await Produto.create(req.body);

    return res.json({
      id,
      nome,
      quantidade,
      descricao,
      precoCompra,
      precoVenda,
      fornecedor,
      classe,
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
      classe: Yup.string(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const produto = await Produto.findByPk(req.body.produtoId);

    const { id, nome, quantidade, descricao, precoCompra, precoVenda, fornecedor, classe } = await produto.update(req.body);

    return res.json({
      id,
      nome,
      quantidade,
      descricao,
      precoCompra,
      precoVenda,
      fornecedor,
      classe,
    });
  }

  async index(req, res) {
    const produtos = await Produto.findAll();

    return res.json(produtos);
  }

  async show(req, res) {
    const id = req.params.id;
    const produto = await Produto.findByPk(id);

    if (produto) {
      res.json(produto);
    }
    else {
      res.json({ message: 'Produto não encontrado' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const produto = await Produto.findByPk(id);

    if (produto) {
      produto.destroy();
      res.json({ message: 'Produto removido com sucesso' })
    }
    else {
      res.json({ message: 'Produto não encontrado' })
    }

  }

}

export default new ProdutoController();
