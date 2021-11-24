db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1, ultimaModificacao: 1 },
);