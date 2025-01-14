type Pizza = {
  id: number,
  name: string,
  img: string,
  price: number,
  sizes: string[],
  description: string
}

// pegar todas as pizzas

const data: Pizza[] =  [
  { 
    id:1, 
    name:'Mussarela', 
    img:'pizza.png', 
    price:20.19, 
    sizes:['100g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  },

  { 
    id:2, 
    name:'Calabresa', 
    img:'pizza2.png', 
    price:18.00, 
    sizes:['320g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  },
  {
    id:3, 
    name:'Quatro Queijos', 
    img:'pizza3.png', 
    price:17.45, 
    sizes:['320g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  },
  {
    id:4, 
    name:'Americana', 
    img:'pizza4.png', 
    price:19.77, 
    sizes:['320g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  },
  {
    id:5, 
    name:'Sorvete', 
    img:'pizza5.png', 
    price:21.43, 
    sizes:['320g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  },
  {
    id:6, 
    name:'Moda da Casa', 
    img:'pizza6.png', 
    price:18.55, 
    sizes:['320g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  },
  {
    id:7, 
    name:'Chocolate', 
    img:'pizza7.png', 
    price:22.36, 
    sizes:['320g', '530g', '860g'], 
    description:'Descrição da pizza em mais de uma linha muito legal bem interessante'
  }
];

/*export const Pizza = {
  getAll: (): Pizza[] => {
    return data
  }
}*/



export const Pizza = {
  getAll: (): Pizza[] => {
    return data.map(pizza => ({
      ...pizza,
      formattedPrice: pizza.price.toFixed(2), // Adiciona uma propriedade formatada
    }));
  }
};