var request = require("request");

var Base = function(){}
Base.prototype.baseHost = "http://localhost:3000";

Base.prototype.salvar = function(callback){
	let data = this
	let baseHost = this.baseHost
	let restName = this.restName
	request.head(`${baseHost}/${restName}.json`, function () {
		let token = this.response.headers.auth_token;
		request.post({ 
		url: `${baseHost}/${restName}.json`,
		headers: { "auth_token": token }, 
		form: data },
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

Base.prototype.todos = function(callback) {
	request.get(`${this.baseHost}/${this.restName}.json`,function (error, response, body) {
		
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
module.exports = Base;