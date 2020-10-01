var Usuario = require("../../../app/models/usuario");

describe("O modelo de usuário", function() {
  describe("com o atributo", function() {
    it("id precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.id).toBe(0);

    });

    it("nome precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.nome).toBe("");

    });

    it("login precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.login).toBe("");

    });

    it("senha precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.senha).toBe("");

    });

    it("email precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.email).toBe("");
    });
  });

	describe("com o método salvar", function() {
		it("deve incluir na API", function(done){
			var usuario = new Usuario();
			usuario.nome = "Valdirene criado pela Interface";
			usuario.login = "Valdirene";
			usuario.senha = "12345";
			usuario.email = "valdirene@beminfinito.com.br";
				usuario.salvar(function(retorno){
					expect(retorno.erro).toBe(false);
					done();
				});
			});
	});

	describe("com o método todos", function() {
		it("deve retornar os dados dos usuarios pela API", function(done){
			Usuario.todos(function(retorno){
				expect(retorno.length >= 0).toBe(true);
				done();
			});
		});
    });
});