var Usuario = require("../models/usuario")

var usuariosController = {
	index: (request, response, next) => {
		Usuario.todos(function(usuarios){
			console.log(usuarios)
			response.render("usuarios/index", {
				title: "Trazer os dados da API",
				usuarios
			})
		});
	}
}
module.exports = usuariosController