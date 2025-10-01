const products = require("../data/products.json");

/* GET home page */
const index = (req, res) => {
  res.render("index", {
    title: "Toko Online Sembako",
    products: products,
    query: ""
  });
};

/* GET search */
const search = (req, res) => {
  let q = req.query.q ? req.query.q.toLowerCase() : "";
  let filtered = products;

  if (q) {
    filtered = products.filter(p =>
      p.name.toLowerCase().includes(q) || p.id.includes(q)
    );
  }


  res.render("index", {
    title: "Toko Online Sembako",
    products: filtered,
    query: req.query.q || ""
  });
};

/* GET detail produk */
const detail = (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id == id);

  if (!product) {
    return res.status(404).send("Produk tidak ditemukan");
  }

  res.render("produk-detail", {
    title: "Detail Produk",
    product
  });
};

module.exports = { index, search, detail };
