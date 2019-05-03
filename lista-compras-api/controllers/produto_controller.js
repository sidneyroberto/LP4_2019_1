const Produto = require('../models/produto');

const controller = {
    recuperarTodos: (req, res) => {
        Produto
            .find()
            .exec()
            .then(
                produtos => res.json(produtos),
                erro => {
                    console.log(erro);
                    res.status(500).json('Erro ao tentar recuperar os produtos');
                }
            );
    }
};

module.exports = controller;