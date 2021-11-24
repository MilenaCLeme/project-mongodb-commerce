db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: { tags: 1 } } } },
  { upsert: true },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });