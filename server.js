const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comidas = [
	{ id: 1, nome: 'Maça'},
	{ id: 2, nome: 'Frango'},
	{ id: 3, nome: 'Feijão'},
	{ id: 4, nome: 'Biscoito'}
];

app.get('/comidas', (req, res) => {
	res.json(comidas);
});

app.get('/comidas/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const comida = comidas.find(i => i.id === id);
	if (comida) {
		res.json(comida);
	} else {
		res.status(404).json({ error: 'Comida não encontrada.'});
	}
});

app.post('/comidas', (req, res) => {
	const { nome } = req.body;
	const novaComida = {
		id: comidas.length + 1,
		nome
	};
	comidas.push(novaComida);
	res.status(201).json(novaComida)
});

app.put('/comidas/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const { nome } = req.body;
	const comida = comidas.find(i => i.id === id);
	if (comida){
		comida.nome = nome;
		res.json(comida)
	} else {
		res.status().json({ error: 'Comida não encontrada.'});
	}
})

app.delete('/comidas/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const index = pessoas.findIndex(i => i.id === id);
	if (index !== -1){
		const comidaDeletada = comidas.splice(index, 1)
		res.json(comidaDeletada[0])
	} else {
		res.status().json({ error: 'Comida não encontrada.'});
	}
})

app.listen(port, () => {
	console.log('Servisor em execução: http://localhost:${port}');
});