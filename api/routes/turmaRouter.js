const turmaRouter = require('express').Router()
const TurmaController = require('../controllers/TurmaController')


turmaRouter.get('/turmas', TurmaController.get)
turmaRouter.get('/turmas/:id', TurmaController.fetch)
turmaRouter.post('/turmas', TurmaController.create)
turmaRouter.put('/turmas/:id', TurmaController.update)
turmaRouter.delete('/turmas/:id', TurmaController.remove)

module.exports = turmaRouter;