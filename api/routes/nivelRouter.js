const nivelRouter = require('express').Router()
const NivelController = require('../controllers/NivelController')

nivelRouter.get('/niveis', NivelController.get)
nivelRouter.get('/niveis/:id', NivelController.fetch)
nivelRouter.post('/niveis', NivelController.create)
nivelRouter.put('/niveis/:id', NivelController.update)
nivelRouter.delete('/niveis/:id', NivelController.remove)

module.exports = nivelRouter;