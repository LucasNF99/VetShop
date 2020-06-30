import * as Yup from 'yup';
import Consult from '../models/Consult';

import Paciente from '../models/Paciente';

class ConsultController {
  async store(req, res) {
    const schema = Yup.object().shape({
      data: Yup.string().required(),
      hora: Yup.string().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const paciente = await Paciente.findByPk(req.body.paciente_id);

    if (!paciente) {
      return res.status(400).json({ error: 'Paciente é um campo obrigatório' })
    }


    const { id, data, hora } = await Consult.create(req.body);

    return res.json({
      id,
      data,
      hora,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      data: Yup.date(),
      hora: Yup.date(),
      consultaId: Yup.number().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }


    const consulta = await Consult.findByPk(req.body.consultaId);

    const { id, data, hora } = await consulta.update(req.body);

    return res.json({
      id,
      data,
      hora,
    });
  }

  async index(req, res) {
    const consultas = await Consult.findAll(
      {
        include: [{
          model: Paciente,
          attributes: ['id', 'nome']
        }],
        attributes: ['id', 'data', 'hora']
      });
    return res.json(consultas);
  }

  async show(req, res) {
    const id = req.params.id;
    const consulta = await Consult.findByPk(id, {
      include: [{
        model: Paciente,
        attributes: ['id', 'nome']
      }],
      attributes: ['id', 'data', 'hora']
    });

    if (consulta) {
      res.json(consulta);
    }
    else {
      res.json({ message: 'Consult não encontrada' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const consulta = await Consult.findByPk(id);

    if (consulta) {
      consulta.destroy();
      res.json({ message: 'Consult removida com sucesso' })
    }
    else {
      res.json({ message: 'Consult não encontrada' })
    }

  }

}

export default new ConsultController();
