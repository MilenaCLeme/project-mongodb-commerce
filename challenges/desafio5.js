db.produtos.updateMany(
  { name: { $nin: ["McChicken"] } },
  { $addToSet: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { _id: 0, name: 1, ingredientes: 1 });