export default class HomeController {
    async index(req, res) {
        res.send('Hi there. This is a project that shows how rafter can be used to help speed up development. Currently there is only 1 other endpoint: localhost:/v1/users');
    }
}
