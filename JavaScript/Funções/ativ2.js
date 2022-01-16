function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const carol = {
    nome : "Carol",
    idade: 23,
}

const vini = {
    nome: 'Vinicius',
    idade: 27,
}

console.log(calculaIdade.apply(carol,[20]));
console.log(calculaIdade.call(vini,20));