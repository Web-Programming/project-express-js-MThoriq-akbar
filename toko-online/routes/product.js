var express = require ("express");
var router = express.Router();
var products = require ("../data/products.json");

router.get("/:id",function(req,res,next){
    const productId = parseInt(req.params.id);//Tangkap id dari URL
    const product = products.find(p=>p.id === productId); // cari produk by id

    if (!product){ //jika produk tidak ditemukan
        return res.status(404).send ('produk tidak di temukan!');
    }

    res.render ('product=detail',
       {
        title : product.name,
        product : product
       } 
    );
});
module.exports = router;