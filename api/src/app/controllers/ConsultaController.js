import * as Yup from 'yup';
import Consulta from '../models/Consulta';

class ConsultaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      data: Yup.date().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { id, data } = await Consulta.create(req.body);

    return res.json({
      id,
      data,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      data: Yup.date().required(),
      consultaId: Yup.number().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }


    const consulta = await Consulta.findByPk(req.body.consultaId);

    const { id, data } = await consulta.update(req.body);

    return res.json({
      id,
      data,
    });
  }

  async index(req, res) {
    const consultas = await Consulta.findAll();

    return res.json(consultas);
  }

  async show(req, res) {
    const id = req.params.id;
    const consulta = await Consulta.findByPk(id);

    if (consulta) {
      res.json(consulta);
    }
    else {
      res.json({ message: 'Consulta não encontrada' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const consulta = await Consulta.findByPk(id);

    if (consulta) {
      consulta.destroy();
      res.json({ message: 'Consulta removida com sucesso' })
    }
    else {
      res.json({ message: 'Consulta não encontrada' })
    }

  }

}

export default new ConsultaController();
