const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const User = require("../models/user");
const Products = require("../models/products");

// ---------- PRODUCTOS ---------- 
//crea una nueva entrada en la base de datos de acuerto al Schema definido en elarchivo task.js
router.post('/productos', async (req, res) => {
    try {
        const product = new Products(req.body);
        await product.save();
        res.json({ status: 'Producto guardado' });
    } catch (error) {
        res.send(error);
    }
});

router.get('/productos', async (req, res) => {
    const product = await Products.find();
    res.json(product);
});

//envia una peticion a el frontend para asi editar los datos
router.get('/productos/:id', async (req, res) => {
    const data = await Products.findById(req.params.id);
    res.json(data);
});

//metodo para actualizar un registro de la base de datos
router.put('/productos/:id', async (req, res) => {
    const newProduct = req.body;
    //obtiene el id por consola
    //console.log(req.params.id);
    await Products.findByIdAndUpdate(req.params.id, newProduct);
    res.json({ status: 'Producto actualizado' });
});

router.delete('/productos/:id', async (req, res) => {
    await Products.findByIdAndRemove(req.params.id);
    res.json({ status: ' Producto eliminado' });
});


// ---------- USUARIOS ---------- 
router.get('/usuarios', async (req, res) => {
    const user = await User.find();
    res.json(user);
});

//envia una peticion a el frontend para asi editar los datos
router.get('/usuarios/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

//metodo para actualizar un registro de la base de datos
router.put('/usuarios/:id', async (req, res) => {
    //const { title, description } = req.body;
    // const newTask = { title, description };
    const newUser = req.body;
    //obtiene el id por consola
    //console.log(req.params.id);
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({ status: 'Usuario actualizado' });
});

//borra un usuario en la base de datos
router.delete('/usuarios/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'Usuario eliminado' });

});

//----------- Auth routes ------------
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json('Email and password required')
        }
        let token = await authService.login(req.body)
        if (token) {
            res.status(token.code).json(token)
        } else {
            res.send('Error')
        }
    } catch (error) {
        res.send(error);
    }
})

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        const userSaved = await authService.register(user);
        res.send(userSaved);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;