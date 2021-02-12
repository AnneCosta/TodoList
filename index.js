const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const sequelize = require('./database/connection');
const entity = require("./database/ListaTarefasEntity");

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

      // show
app.get('/', async (req,res) => {
    const task = await entity.findAll({
        attributes: ['id', 'tarefa']
    })
    res.render('index', {task: task});
});
      // create
app.post('/', async (req, res) => {
    let {conteudo} = req.body;

    const novaTask= entity.build({tarefa:conteudo})
    await novaTask.save();
    console.log();
    res.redirect("/");
});
      // delete
app.get('/:id', async (req,res) => {
    let {id} = req.params;
    await entity.destroy({ where: { id } });
    res.redirect("/");
});

sequelize.authenticate().then(async () => {
    await sequelize.sync({ force: true });
    app.listen(3000, () => console.log("Server Online!"));
});