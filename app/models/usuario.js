var request = require("request");
var host = "http://localhost:3000";

var Usuario = function(usuario){
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
	
	this.salvar = callback => {
		let usuario = this
		request.head(`${host}/usuarios.json`, function () {
			let token = this.response.headers.auth_token;
			request.post({ 
			url: `${host}/usuarios.json`,
			headers: { "auth_token": token }, 
			form: usuario },
			function (error, response, body) {
				if(response.statusCode === 201){
					callback({
						erro: false
					})
				}
				else{
					var json = JSON.parse(response.body)
					callback({
						erro: true,
						mensagem: json.mensagem
					})
				}
			})
		})
	};
};

Usuario.todos = callback => {
	request.get(`${host}/usuarios.json`,function (error, response, body) {
		var json = JSON.parse(response.body)
		if(response.statusCode === 200){
			callback(json)
		}
		else{
			callback({
				erro: true,
				mensagem: json.mensagem
			})
		}
	})
}
module.exports = Usuario;