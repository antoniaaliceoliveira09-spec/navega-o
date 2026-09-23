const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
    {
        id: 1,
        nome: "Sam Winchester",
        email: "sammy.win@example.com",
        telefone: "123-456-7890"
    },
    {
        id: 2,
        nome: "Dean Winchester",
        email: "impala.67@example.com",
        telefone: "676-767-6767"
    },
    {
        id: 3,
        nome: "Bobby Singer",
        email: "bob.singer@example.com",
        telefone: "555-555-5555"
    }
];

router.get("/", (req, res) => {
    res.render("clientes/index", {

        clientes: clientes

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("clientes/form-cadastro");

});

router.post("/", (req, res) => {

    const { nome, email, telefone } = req.body;

    const novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        email: email,
        telefone: telefone
    };

    clientes.push(novoCliente);

    res.redirect("/clientes");
});

module.exports = router;