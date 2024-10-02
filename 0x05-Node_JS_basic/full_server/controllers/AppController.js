class AppController {
    static getHomePage(request, response) {
        response.status(200);
        response.send('Hello Holberton School!');
        return response;
    }
}

export default AppController;
