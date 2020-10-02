var homeController = {
	index: (request, response, next) => {
		response.render("home/index", {title: "Interface do cms"})
	}
}
module.exports = homeController