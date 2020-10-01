var Base = require("../../../app/models/base");

describe("O modelo de usuário", function() {
	describe("com o método salvar", function() {
		it("deve incluir na API", function(done){
			var base = new Base();
			expect(base.salvar !== undefined).toBe(true)
			done();
		});
	});

	describe("com o método todos", function() {
		it("deve retornar os dados dos bases pela API", function(done){
			var base = new Base();
			expect(base.todos !== undefined).toBe(true)
			done();
		});
	});
});