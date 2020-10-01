var Base = require("../../app/models/base");

var Pagina = function(pagina){
	this.restName = "paginas";
	
	if(pagina)
	{
		this.id = pagina.id;
		this.nome = pagina.nome;
		this.conteudo = pagina.conteudo;
	
	}
	else{
		this.id = 0;
		this.nome = "";
		this.conteudo = "";
	
	}
};

Pagina.prototype = new Base();

Pagina.todos = callback => {
	new Pagina().todos(callback)
}
module.exports = Pagina;