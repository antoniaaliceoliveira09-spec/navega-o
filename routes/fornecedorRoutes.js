const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
    {
        id: 1,
        razaoSocial: "Nike",
        cnpj: "59.546.515/0001-34",
        email: "nike@gmail.com",
        telefone: "555-555-5555",
        cidade: "Beaverton"
    },
    {
        id: 2,
        razaoSocial: "Kipling",
        cnpj: "78.467.818/7771-67",
        email: "kipling@gmail.com",
        telefone: "888-777-9991",
        cidade: "São Paulo"
    },
    {
        id: 3,
        razaoSocial: "Casas Bahia",
        cnpj: "33.041.260/0001-96",
        email: "casas.bahia@gmail.com",
        telefone: "555-400-4336",
        cidade: "Bahia"
    }
];

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
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        cidade: cidade,
    };

    fornecedores.push(novoFornecedor);

    res.redirect("/fornecedores");
});

module.exports = router;