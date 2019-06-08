const express = require('express')
const router = express.Router(); // permite usar multiples rutas

//routes
router.get('/', function(req, res){
    res.render('index.html', { tittle: "First Website"});
    //res.sendFile(path.join(__dirname, 'views/index.html')); //Unir los dos enlaces 
    //console.log(__dirname); //Dirname retorna la direccion donde estamos
});

router.get('/contact', function(req, res){
    res.render('contact.html', {tittle: 'Contact Page'});
});

module.exports = router;