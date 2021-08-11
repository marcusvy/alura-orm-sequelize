const pessoasRouter = require('express').Router()
const PessoaController = require('../controllers/PessoaController')

pessoasRouter.get('/pessoas', PessoaController.get)
pessoasRouter.get('/pessoas/:id', PessoaController.fetch)
pessoasRouter.post('/pessoas', PessoaController.create)
pessoasRouter.put('/pessoas/:id', PessoaController.update)
pessoasRouter.delete('/pessoas/:id', PessoaController.remove)

pessoasRouter.get(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.fetchMatricula
)
pessoasRouter.post(
  '/pessoas/:estudanteId/matricula',
  PessoaController.createMatricula
)
pessoasRouter.put(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.updateMatricula
)
pessoasRouter.delete(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.removeMatricula
)

module.exports = pessoasRouter;