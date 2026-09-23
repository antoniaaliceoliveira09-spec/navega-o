const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
    {
        id: 1,
        nome: "Colt",
        descricao: "Revolver",
        preco: 45.000,
        estoque: 1,
        categoria: "Arma de fogo"
    },
    {
        id: 2,
        nome: "Faca Ruby",
        descricao: "Faca",
        preco: 180.00,
        estoque: 1,
        categoria: "Arma branca"
    },
    {
        id: 3,
        nome: "Jaqueta",
        descricao: "Jaqueta de couro",
        preco: 500.00,
        estoque: 1,
        categoria: "Roupas"
    }
];

router.get("/", (req, res) => {
    res.render("produtos/index", {
        produtos: produtos
    });
});

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, descricao, preco, estoque, categoria } = req.body;

    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        descricao: descricao,
        preco: parseFloat(preco),
        estoque: parseInt(estoque),
        categoria: categoria
    };

    produtos.push(novoProduto);

    res.redirect("/produtos");
});

module.exports = router;
      


router.get("/", (req, res) => {
    res.render("fornecedores/index", {

        fornecedores: fornecedores

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("fornecedores/form-cadastro");

});

router.post("/", (req, res) => {

    const { razaoSocial, cnpj, email, telefone, cidade } = req.body;

    const novoFornecedor = {
        id: fornecedores.length + 1,
         nome: nome,
        descricao: descricao,
        preco: parseFloat(preco),
        estoque: parseInt(estoque),
        categoria: categoria
    };

    fornecedores.push(novoFornecedor);

    res.redirect("/fornecedores");
});

module.exports = router;