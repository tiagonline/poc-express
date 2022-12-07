const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes');

app.use(express.json()); //permite o envio com body em json

app.get('/', (req, res) => {
    res.send('hello world');
}); 

app.post('/', (req, res) => {
    res.send('post request no barra');
});

app.post('/body', (req, res) => {
    res.send(req.body);
})

app.get('/qs', (req, res) => {
    res.send(req.query);
});

app.post('/teste', (req, res) => {
    res.send('outra rota de teste');
});

app.put('/teste/:userId/permission/:permissionId', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.use(userRoutes.router); 