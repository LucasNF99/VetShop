import * as Yup from 'yup';
import Paciente from '../models/Paciente';

class PacienteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      especie: Yup.string().required(),
      raca: Yup.string().required(),
      peso: Yup.number().required(),
      altura: Yup.number().required(),
      dataNascimento: Yup.string().required(),
    })


    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }

    const { id, nome, especie, raca, peso, altura, dataNascimento } = await Paciente.create(req.body);

    return res.json({
      id,
      nome,
      especie,
      raca,
      peso,
      altura,
      dataNascimento,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      especie: Yup.string(),
      raca: Yup.string(),
      peso: Yup.number(),
      altura: Yup.number(),
      dataNascimento: Yup.string(),
      pacienteId: Yup.number().required(),
    })

    try {
      await schema.validate(req.body)
    }
    catch (erro) {
      res.status(400).json(erro.errors)
    }


    const paciente = await Paciente.findByPk(req.body.pacienteId);

    const { id, nome, especie, raca, peso, altura, dataNascimento } = await paciente.update(req.body);

    return res.json({
      id,
      nome,
      especie,
      raca,
      peso,
      altura,
      dataNascimento,
    });
  }

  async index(req, res) {
    const pacientes = await Paciente.findAll();

    return res.json(pacientes);
  }

  async show(req, res) {
    const id = req.params.id;
    const paciente = await Paciente.findByPk(id);

    if (paciente) {
      res.json(paciente);
    }
    else {
      res.json({ message: 'Paciente não encontrado' })
    }

  }

  async delete(req, res) {
    const id = req.params.id;
    const paciente = await Paciente.findByPk(id);

    if (paciente) {
      paciente.destroy();
      res.json({ message: 'Paciente removido com sucesso' })
    }
    else {
      res.json({ message: 'Paciente não encontrado' })
    }

  }
}

export default new PacienteController();
