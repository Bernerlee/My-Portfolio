import Image1 from "../assets/images/menu-1.png";
import Image2 from "../assets/images/menu-2.png";
import Image3 from "../assets/images/menu-3.png";
import Image4 from "../assets/images/menu-4.png";
import Image5 from "../assets/images/menu-5.png";
import Image6 from "../assets/images/menu-6.png";

const menuData = [
  {
    name: "Punny Pepperoni",
    id: "punny-pepperoni",
    price: 120.0,
    image: Image5,

    rating: 4.8,
    reviews: 40,

    description:
      "Our Punny Pepperoni pizza is a flavor explosion, masterfully blending zesty tastes with the freshest ingredients. Each slice is a culinary adventure, carefully crafted to ignite your senses. It features a perfectly golden crust, a luscious tomato sauce, and the most savory pepperoni. Experience the magic today!",

    about:
      "Our Punny Pepperoni pizza is a culinary masterpiece, blending zesty flavors with premium ingredients. Each bite offers a symphony of taste, carefully crafted to deliver an unforgettable experience.",

    sections: [
      {
        title: "1. Hand-Crafted Dough",
        content:
          "Our dough is made daily using a traditional Neapolitan recipe. We allow the dough to rise slowly, developing a complex flavor and airy texture that perfectly complements our toppings.",
      },
      {
        title: "2. Fresh Ingredients",
        content:
          "We source only the freshest, highest-quality ingredients. From vine-ripened tomatoes to artisanal pepperoni, every component is selected for its superior taste and contribution to the overall flavor profile.",
      },
    ],

    additionalDetails: {
      description:
        "We start with our signature dough, add a layer of our homemade tomato sauce, and top it with generous slices of spicy pepperoni and a blend of mozzarella and provolone cheeses.",

      options: [
        "1. Spicy",
        "2. Cheesy",
        "3. Thin Crust",
        "4. Classic",
        "5. Pepperoni",
        "6. Tomato Sauce",
      ],
    },
  },
  {
    id: "sassy-greens",
    name: "Sassy Greens",
    price: 20.0,
    rating: "4.9",
    reviews: "36",
    category: "VEGGIE PIZZA",
    image: Image1,

    description:
      "Sassy Greens is a fresh and colorful pizza packed with vibrant vegetables and rich flavors. Each slice is carefully crafted with premium ingredients for a delicious and satisfying experience.",

    about:
      "Sassy Greens brings together fresh vegetables, creamy cheese, and our signature pizza dough to create a colorful and flavorful combination that is perfect for anyone who loves a lighter but satisfying slice.",

    sections: [
      {
        title: "1. Hand-Crafted Dough",
        content:
          "Our dough is made fresh every day using a traditional Neapolitan recipe. It is allowed to rise slowly, creating a light and airy crust that complements every topping.",
      },
      {
        title: "2. Fresh Ingredients",
        content:
          "We carefully select fresh vegetables, herbs, and premium cheese to create a balanced combination of textures and flavors in every bite.",
      },
    ],

    additionalDetails: {
      description:
        "A colorful combination of fresh vegetables, herbs, and premium cheese layered over our signature tomato sauce.",
      options: [
        "1. Spicy",
        "2. Cheesy",
        "3. Thin Crust",
        "4. Classic",
        "5. Extra Veggies",
        "6. Tomato Sauce",
      ],
    },
  },

  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    price: 120.0,
    rating: "4.8",
    reviews: "42",
    category: "SIGNATURE PIZZA",
    image: Image2,

    description:
      "Mapo Tofu combines bold flavors with a creative twist on the classic pizza. Rich sauce, creamy cheese, and carefully selected toppings come together to create a memorable slice.",

    about:
      "Mapo Tofu is one of our more adventurous creations, bringing together bold flavors and familiar pizza comfort. Every ingredient is carefully balanced to create a rich and satisfying experience.",

    sections: [
      {
        title: "1. Hand-Crafted Dough",
        content:
          "Our dough is prepared fresh every morning and given enough time to develop its signature airy texture and rich flavor.",
      },
      {
        title: "2. Bold Flavors",
        content:
          "We combine rich sauces, carefully selected toppings, and premium cheese to create layers of flavor that make every bite exciting.",
      },
    ],

    additionalDetails: {
      description:
        "A bold signature creation combining rich sauce, creamy cheese, and flavorful toppings.",
      options: [
        "1. Spicy",
        "2. Cheesy",
        "3. Thin Crust",
        "4. Classic",
        "5. Extra Toppings",
        "6. Tomato Sauce",
      ],
    },
  },

  {
    id: "peking-duck",
    name: "Peking Duck",
    price: 80.0,
    rating: "4.9",
    reviews: "40",
    category: "MEAT LOVERS",
    image: Image3,

    description:
      "Peking Duck is a rich and flavorful pizza made for meat lovers. Tender toppings, melted cheese, and our signature sauce come together on a perfectly baked crust.",

    about:
      "Peking Duck delivers a satisfying combination of savory flavors and crispy textures. From the carefully prepared toppings to the freshly baked crust, every part of this pizza is designed to complement the next.",

    sections: [
      {
        title: "1. Hand-Crafted Dough",
        content:
          "Our dough is freshly prepared and slowly fermented to create a light interior with a beautifully crisp edge when baked.",
      },
      {
        title: "2. Premium Toppings",
        content:
          "We use carefully selected ingredients and premium meat toppings to create a rich, savory flavor that stands out in every slice.",
      },
    ],

    additionalDetails: {
      description:
        "A savory meat-lover's pizza with premium toppings, rich tomato sauce, and melted mozzarella cheese.",
      options: [
        "1. Spicy",
        "2. Cheesy",
        "3. Thin Crust",
        "4. Classic",
        "5. Extra Meat",
        "6. Tomato Sauce",
      ],
    },
  },

  {
    id: "cheesy-chuckle",
    name: "Cheesy Chuckle",
    price: 50.0,
    rating: "4.7",
    reviews: "31",
    category: "CLASSIC PIZZAS",
    image: Image4,

    description:
      "Cheesy Chuckle is all about rich, melted cheese and a perfectly baked crust. Simple, comforting, and full of flavor, it is a classic that never disappoints.",

    about:
      "Sometimes the simplest combinations create the most satisfying pizzas. Cheesy Chuckle focuses on premium cheese, our signature sauce, and perfectly prepared dough for a comforting classic.",

    sections: [
      {
        title: "1. Perfectly Baked Crust",
        content:
          "Our dough is carefully prepared and baked at high heat to create a crisp outside while keeping the center light and soft.",
      },
      {
        title: "2. Extra Cheese",
        content:
          "We use premium mozzarella and carefully balanced cheese blends to create that rich, stretchy texture that makes every bite satisfying.",
      },
    ],

    additionalDetails: {
      description:
        "A comforting classic made with rich tomato sauce, premium mozzarella, and our signature hand-crafted crust.",
      options: [
        "1. Spicy",
        "2. Extra Cheesy",
        "3. Thin Crust",
        "4. Classic",
        "5. Extra Cheese",
        "6. Tomato Sauce",
      ],
    },
  },

  {
    id: "crispy-crust",
    name: "Crispy Crust",
    price: 30.0,
    rating: "4.8",
    reviews: "35",
    category: "CLASSIC PIZZAS",
    image: Image6,

    description:
      "Crispy Crust delivers exactly what its name promises: a beautifully baked, golden crust topped with flavorful ingredients and melted cheese.",

    about:
      "Crispy Crust was created for pizza lovers who appreciate the texture of a perfectly baked base. Its golden crust provides the ideal foundation for our fresh toppings and signature sauce.",

    sections: [
      {
        title: "1. The Perfect Crust",
        content:
          "Our dough is prepared with carefully selected ingredients and baked until the edges become golden and crisp while the center remains deliciously tender.",
      },
      {
        title: "2. Fresh Toppings",
        content:
          "Fresh ingredients are added generously to create a balanced combination of flavor and texture without overpowering the signature crust.",
      },
    ],

    additionalDetails: {
      description:
        "A golden, crispy pizza topped with fresh ingredients, rich tomato sauce, and premium mozzarella.",
      options: [
        "1. Spicy",
        "2. Cheesy",
        "3. Thin Crust",
        "4. Classic",
        "5. Extra Crispy",
        "6. Tomato Sauce",
      ],
    },
  },
];

export default menuData;
