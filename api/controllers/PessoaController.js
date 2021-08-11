const database = require('../models')

class PessoaController {

  static async get(req, res) {
    try {
      const data = await database.Pessoas.findAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async fetch(req, res) {
    const { id } = req.params

    try {
      const data = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const entity = req.body;
    try {
      const register = await database.Pessoas.create(entity);
      return res.status(201).json(register)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async update(req, res) {
    const entity = req.body;
    const { id } = req.params;
    console.log(id)
    const whereCondition = {
      where: {
        id: Number(id)
      }
    };

    try {
      await database.Pessoas.update(entity, whereCondition);
      const entityAtualizada = await database.Pessoas.findOne(whereCondition)
      return res.status(200).json(entityAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async remove(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json({ message: `id: ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // /pessoas/:estudanteId/matricula/:matriculaId
  static async fetchMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params

    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });
      return res.status(200).json(matricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // /pessoas/:estudanteId/matricula
  static async createMatricula(req, res) {
    const { estudanteId } = req.params
    const matricula = {
      ...req.body,
      estudante_id: Number(estudanteId)
    };
    try {
      const register = await database.Matriculas.create(matricula);
      return res.status(201).json(register)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // /pessoas/:estudanteId/matricula/:matriculaId
  static async updateMatricula(req, res) {
    const entity = req.body;
    const { estudanteId, matriculaId } = req.params;
    const whereCondition = {
      where: {
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)
      }
    };

    try {
      await database.Matriculas.update(entity, whereCondition);
      const entityAtualizada = await database.Matriculas.findOne(whereCondition)
      return res.status(200).json(entityAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // /pessoas/:estudanteId/matricula/:matriculaId
  static async removeMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId)
        }
      });
      return res.status(200).json({ message: `id: ${matriculaId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}

module.exports = PessoaController