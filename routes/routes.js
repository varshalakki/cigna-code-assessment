
const specialtyRoutes = require("./specialty");

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send("Welcome");
    });
    specialtyRoutes(app, fs);
};

module.exports = appRouter;