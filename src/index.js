import express from "express";
import { Cliente } from "./models/Cliente";
import { Produto } from "./models/Produto";
import { Vendedor } from "./models/Vendedor";


const app = express();


// Rotas dos Produtos
app.get("/produtos", async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos)
})

app.get("/produtos/id=:id", async (req, res) => {
    const id = req.params.id;
    const produto = await Produto.findByPk(id);
    
    if (produto !== null) {
        res.json(produto)
    }
    else {
        res.send("Vendedor indisponível")
    }
})


// Rotas dos Clientes
app.get("/clientes", async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes)
});


app.get("/clientes/id=:id", async (req, res) => {
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id);
    
    if (cliente !== null) {
        res.json(cliente)
    }
    else {
        res.send("Vendedor indisponível")
    }
})


// Rotas dos Vendedores
app.get("/vendedores", async (req, res) => {
    const vendedores = await Vendedor.findAll();
    res.json(vendedores)
});

app.get("/vendedores/id=:id", async (req, res) => {
    const id = req.params.id;
    const vendedor = await Vendedor.findByPk(id);
    if (vendedor !== null) {
        res.json(vendedor)
    }
    else {
        res.send("Vendedor indisponível")
    }

})


app.listen(8190, () => {
    console.log("Conectado com sucesso!")
});