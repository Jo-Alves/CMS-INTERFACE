var Base = require("../../app/models/base");

var Usuario = function(usuario){
	this.restName = "usuarios";
	if(usuario)
	{
		this.id = usuario.id;
		this.nome = usuario.nome;
		this.login = usuario.login;
		this.senha = usuario.senha;
		this.email = usuario.email;
	}
	else{
		this.id = 0;
		this.nome = "";
		this.login = "";
		this.senha = "";
		this.email = "";
	}
};

Usuario.prototype = new Base();

Usuario.todos = callback => {
	new Usuario().todos(callback)
}
module.exports = Usuario;