
const specialtyRoutes = (app, fs) => {
    
    const dataPath = './data/data.json';
    
    app.get('/specialty', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) =>{
            if(err){
                throw err;
            }
            let results = JSON.parse(data);
            res.send(results.results);
        });
    });
};

module.exports = specialtyRoutes;