import * as Yup from 'yup';
import Prontuario from '../models/Prontuario';

import Consult from '../models/Consult';

class ProntuarioController {
  async store(req, res) {
    const schema = Yup.object().shape({
      laudo: Yup.string().required(),
      exame: Yup.string(),
      prescricao: Yup.string().required(),
      queixas: Yup.string().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const consulta = await Consult.findByPk(req.body.consulta_id);

    if (!consulta) {
      return res.status(400).json({ error: 'Consulta não exite' })
    }



    const { id, laudo, exame, prescricao, queixas } = await Prontuario.create(req.body);

    return res.json({
      id,
      laudo,
      exame,
      prescricao,
      queixas,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      laudo: Yup.string(),
      exame: Yup.string(),
      prescricao: Yup.string(),
      queixas: Yup.string(),
      prontuarioId: Yup.number().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const prontuario = await Prontuario.findByPk(req.body.prontuarioId);

    const { id, laudo, exame, prescricao, queixas } = await prontuario.update(req.body);

    return res.json({
      id,
      laudo,
      exame,
      prescricao,
      queixas,
    });
  }

  async index(req, res) {
    const prontuarios = await Prontuario.findAll({
      include: [{
        model: Consult,
        attributes: ['id', 'data', 'hora']
      }],
      attributes: ['id', 'laudo', 'exame', 'prescricao', 'queixas']
    });

    return res.json(prontuarios);
  }

  async show(req, res) {
    const id = req.params.id;
    const prontuario = await Prontuario.findByPk(id, {
      include: [{
        model: Consult,
        attributes: ['id', 'data', 'hora']
      }],
      attributes: ['id', 'laudo', 'exame', 'prescricao', 'queixas']
    });

    if (prontuario) {
      res.json(prontuario);
    }
    else {
      res.json({ message: 'Prontuario não encontrada' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const prontuario = await Prontuario.findByPk(id);

    if (prontuario) {
      prontuario.destroy();
      res.json({ message: 'Prontuario removido com sucesso' })
    }
    else {
      res.json({ message: 'Prontuario não encontrado' })
    }

  }

}

export default new ProntuarioController();
