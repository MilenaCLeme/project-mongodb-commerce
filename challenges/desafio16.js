db.produtos.find({ ingredients: { $size: 4 } }).count();
