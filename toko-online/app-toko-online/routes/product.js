const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

// Route detail produk
router.get("/:id", (req, res) => {
  const productId = req.params.id; // pastikan angka
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Produk tidak ditemukan");
  }

  res.render("produk-detail", {
    title: `Detail Produk - ${product.name}`,
    product,
  });
});

// Route detail review untuk produk tertentu
router.get("/:productId/review/:reviewId", (req, res) => {
  const { productId, reviewId } = req.params;

  res.render("review-detail", {
    title: `Ulasan ${reviewId} untuk Produk ${productId}`,
    productId,
    reviewId,
  });
});

module.exports = router;