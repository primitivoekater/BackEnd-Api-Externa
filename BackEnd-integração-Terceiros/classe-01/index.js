 const  express =require ('express')
 const rotas = require('./rotas');

 const app= express();
app.use(express.json());

app.listen(8000)