const database = require('../models')

class TurmaController {

  static async get(req, res) {
    try {
      const data = await database.Turmas.findAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async fetch(req, res) {
    const { id } = req.params

    try {
      const data = await database.Turmas.findOne({
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
    const pessoa = req.body;
    try {
      const register = await database.Turmas.create(pessoa);
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
      await database.Turmas.update(entity, whereCondition);
      const entityAtualizada = await database.Turmas.findOne(whereCondition)
      return res.status(200).json(entityAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async remove(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json({ message: `id: ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}

module.exports = TurmaController