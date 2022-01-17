const express = require ('express');
const app = express();
const path = require ('path');
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));



/*app.get('/', function(req,res){
    res.send('Bienvenidos al sitio');
});

*/
app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/home.html');
})

app.use(express.static(path.join(__dirname, './public')));



