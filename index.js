const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza

console.log(`Ejercicio A`);
pizzas.forEach((pizza) => {
  if (pizza.id % 2 != 0) {
    console.log(`La pizza, ${pizza.nombre} tiene un ID impar.`);
  }
});

console.log(`Ejercicio B`);
const PizzaMayoraUnPrecio = (precio) => {
  const resultado = pizzas.some((pizza) => {
    return pizza.precio > precio;
  });
  if (resultado) {
    console.log(`Si hay productos con precio mayor a $${precio}`);
  }
};
PizzaMayoraUnPrecio(600);

console.log(`Ejercicio C`);
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} cuesta $${pizza.precio}`);
});

console.log(`Ejercicio D`);
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene ${pizza.ingredientes}`);
});
