import blogImage1 from "../assets/images/blog-1.png";
import blogImage2 from "../assets/images/blog-2.png";
import blogImage3 from "../assets/images/blog-3.png";

import blogImage4 from "../assets/images/blog-4.png";
import blogImage5 from "../assets/images/blog-5.png";
import blogImage6 from "../assets/images/blog-6.png";

import authourImage from "../assets/images/AuthourImage.png";

export const blogData = [
  {
    slug: "a-taste-of-tradition",
    category: "CHINESE FOOD",
    date: "12 Mar, 2024",
    title: "A Taste of Tradition: The Story Behind Our Signature Dish.",

    author: "Eileen Yin-Fei Lo",
    authourImage: authourImage,
    authorRole: "Editor",

    image: blogImage2,

    intro:
      "Some dishes become special because of the ingredients, while others become unforgettable because of the stories behind them. At Pizzaro, our signature dishes are inspired by the traditions, people, and flavors that have shaped the way we cook.",

    sections: [
      {
        heading: "Where the Inspiration Began",
        content:
          "Every signature dish starts with an idea. For us, that idea often comes from the simple meals we grew up enjoying and the flavors we discovered while traveling. We wanted to create something that felt familiar while still giving our guests something new to experience.",
      },
      {
        heading: "Preserving Traditional Flavors",
        content:
          "Traditional cooking is about more than following a recipe. It is about understanding why certain ingredients work together and respecting the techniques that bring them to life. We take those principles seriously while giving every dish our own Pizzaro interpretation.",
      },
      {
        heading: "The Ingredients That Make It Special",
        content:
          "We carefully select every ingredient that goes into our kitchen. Fresh vegetables, quality cheeses, aromatic herbs, rich sauces, and carefully prepared dough all play an important role in creating the flavors our guests have come to love.",
      },
      {
        heading: "From Our Kitchen to Your Table",
        content:
          "Once the preparation begins, everything comes together in the kitchen. Our chefs work with patience and attention to detail because we believe that great food should never feel rushed. Every plate that leaves our kitchen represents the care behind the recipe.",
      },
      {
        heading: "Why We Keep Coming Back to Tradition",
        content:
          "Tradition gives us a foundation, but it does not mean we have to stop evolving. We continue to experiment, learn, and discover new ways to bring familiar flavors to our guests while staying true to the principles that inspired us in the first place.",
      },
    ],

    quote: {
      text: "The best recipes are the ones that carry a story from one table to the next.",
      author: "Chef Lorenzo",
    },

    conclusion:
      "Food has a wonderful way of connecting people to places, memories, and one another. That is what we hope to achieve every time we serve our signature dishes.",
  },

  {
    slug: "why-fresh-ingredients-matter",
    category: "BUSINESS",
    date: "12 Mar, 2024",
    title: "Why Fresh Ingredients Make All the Difference in Every Bite.",

    author: "Marco Rossi",
    authorRole: "Food Editor",
    authourImage: authourImage,

    image: blogImage3,

    intro:
      "A great pizza does not begin in the oven. It begins with the ingredients. From the vegetables we prepare each morning to the herbs we add just before serving, freshness plays a major role in the flavor, texture, and character of every dish we make.",

    sections: [
      {
        heading: "Freshness Starts at the Source",
        content:
          "We believe that knowing where our ingredients come from is an important part of cooking well. We work with trusted suppliers who share our commitment to quality and carefully select ingredients that meet the standards we expect in our kitchen.",
      },
      {
        heading: "Choosing Better Ingredients",
        content:
          "Not every ingredient is treated the same. We look for vibrant vegetables, quality cheeses, fragrant herbs, and ingredients that bring natural flavor to every dish. Choosing better ingredients allows us to keep our recipes simple without compromising on taste.",
      },
      {
        heading: "The Difference You Can Taste",
        content:
          "Fresh ingredients have a character that is difficult to recreate. Tomatoes taste brighter, herbs are more aromatic, vegetables retain their texture, and every bite feels more balanced. These small differences add up to a much better dining experience.",
      },
      {
        heading: "From Local Producers to Our Kitchen",
        content:
          "Whenever possible, we choose to work with local producers and suppliers. Building those relationships allows us to understand the ingredients we use and gives us the opportunity to support the people who help bring fresh food to our kitchen.",
      },
      {
        heading: "A Better Slice Starts With Better Ingredients",
        content:
          "We never want our guests to wonder why something tastes good. The answer should be simple: good ingredients, prepared carefully and served at the right moment. That philosophy guides everything we do.",
      },
    ],

    quote: {
      text: "When the ingredients are good, you do not need to hide them. You simply let them speak.",
      author: "Chef Lorenzo",
    },

    conclusion:
      "Freshness is not a trend for us. It is part of the way we cook, the way we source, and the way we think about every plate that leaves our kitchen.",
  },

  {
    slug: "from-farm-to-fork",
    category: "RESTAURANT",
    date: "12 Mar, 2024",
    title: "From Farm to Fork: Our Commitment to Local Sourcing.",

    author: "Daniel Wong",
    authorRole: "Food Writer",
    authourImage: authourImage,

    image: blogImage4,

    intro:
      "The journey of a great meal begins long before it reaches the restaurant. At Pizzaro, we care about the people and places behind the ingredients we use, which is why local sourcing has become an important part of how we build our menu.",

    sections: [
      {
        heading: "Knowing Where Our Ingredients Come From",
        content:
          "When we know where an ingredient comes from, we can make better decisions about how we prepare and serve it. Our team spends time building relationships with suppliers so we can understand the quality, seasonality, and story behind what enters our kitchen.",
      },
      {
        heading: "Working With Local Producers",
        content:
          "Local producers bring something special to the table. Their knowledge of the land, their attention to detail, and their commitment to quality help us find ingredients that are full of character. We are proud to work alongside people who care about food as much as we do.",
      },
      {
        heading: "Seasonal Ingredients, Better Flavors",
        content:
          "Cooking with the seasons gives our chefs the opportunity to work with ingredients when they are at their best. It also keeps our menu exciting, allowing us to introduce new combinations and give familiar dishes a fresh perspective.",
      },
      {
        heading: "Reducing the Distance From Farm to Table",
        content:
          "Choosing local suppliers whenever possible helps us shorten the journey ingredients take before reaching our kitchen. It also allows us to build stronger relationships with the people who produce our food and contribute to the community around us.",
      },
      {
        heading: "Building a More Thoughtful Kitchen",
        content:
          "Local sourcing is not about perfection. It is about making thoughtful choices wherever we can. Every small decision, from the supplier we choose to the ingredients we place on a plate, contributes to the kind of restaurant we want Pizzaro to be.",
      },
    ],

    quote: {
      text: "Great food connects the people who grow it, prepare it, and gather around it.",
      author: "Chef Lorenzo",
    },

    conclusion:
      "From the first ingredient selected by our suppliers to the final dish served at your table, we want every part of the journey to feel intentional.",
  },

  {
    slug: "behind-the-scenes-our-chefs",
    category: "RESTAURANT",
    date: "12 Mar, 2024",
    title: "Behind the Scenes: A Day in the Life of Our Chefs.",

    author: "Sofia Chen",
    authorRole: "Editor",
    authourImage: authourImage,

    image: blogImage5,

    intro:
      "When guests arrive at Pizzaro, they see the finished plate. What they do not always see is everything that happens before it reaches the table. Our chefs arrive early, prepare carefully, work through busy service, and finish each day knowing that every detail matters.",

    sections: [
      {
        heading: "Before the Doors Open",
        content:
          "The kitchen begins moving long before the first guest arrives. Our chefs check ingredients, prepare sauces, portion toppings, organize their stations, and make sure everything is ready for the hours ahead. Preparation is one of the most important parts of a successful service.",
      },
      {
        heading: "Preparing the Dough",
        content:
          "Our dough needs time and attention. From mixing and resting to shaping each base, every step affects the final texture. The goal is simple: a crust that is light, flavorful, and strong enough to carry everything that comes on top.",
      },
      {
        heading: "The Kitchen Comes Alive",
        content:
          "As the restaurant fills up, the pace changes quickly. Orders begin coming in from every direction, and communication becomes essential. Every member of the kitchen team has a role, and everyone works together to make sure each dish leaves the kitchen at its best.",
      },
      {
        heading: "The Rush of Service",
        content:
          "The busiest moments are often the most rewarding. There is something exciting about watching a team work together under pressure while still paying attention to the small details. Even during a busy service, we never want speed to come at the expense of quality.",
      },
      {
        heading: "What Happens After the Last Order",
        content:
          "When the final order leaves the kitchen, the work is not quite finished. Stations are cleaned, ingredients are stored, equipment is checked, and the team prepares for another day. It is a quieter part of the job, but it is just as important.",
      },
    ],

    quote: {
      text: "A great kitchen is not just about great recipes. It is about great people working together.",
      author: "Chef Lorenzo",
    },

    conclusion:
      "Every dish has a team behind it. We are proud of the chefs, cooks, and kitchen staff who bring energy, patience, and passion to Pizzaro every day.",
  },

  {
    slug: "inspiration-behind-our-seasonal-menu",
    category: "CHINESE FOOD",
    date: "12 Mar, 2024",
    title: "Celebrating Flavors: The Inspiration Behind Our Seasonal Menu.",

    author: "Fuchsia Dunlop",
    authorRole: "Food Editor",
    authourImage: authourImage,

    image: blogImage6,

    intro:
      "A menu should never feel stuck in one moment. As ingredients change throughout the year, so do the ideas that inspire our kitchen. Our seasonal menu gives our chefs the freedom to explore new flavors while keeping the Pizzaro experience familiar.",

    sections: [
      {
        heading: "Inspiration Around Every Corner",
        content:
          "Ideas for new dishes can come from almost anywhere. A conversation with a supplier, an ingredient discovered at a local market, or even a memorable meal can inspire our chefs to begin experimenting with a new combination.",
      },
      {
        heading: "Cooking With the Seasons",
        content:
          "Every season brings its own ingredients and flavors. Instead of forcing the same menu throughout the year, we use seasonal produce as an opportunity to create dishes that feel appropriate for the moment and make the most of what is available.",
      },
      {
        heading: "From Idea to Plate",
        content:
          "Creating a dish is a process of trial and error. Our chefs test different ingredients, adjust quantities, change cooking methods, and taste everything repeatedly. A dish only earns its place on the menu when every element feels balanced.",
      },
      {
        heading: "Testing the Perfect Combination",
        content:
          "Some combinations work immediately, while others require more patience. We look for harmony between textures, flavors, aromas, and presentation. The goal is not simply to make something different, but to make something worth remembering.",
      },
      {
        heading: "A Menu That Keeps Evolving",
        content:
          "Our seasonal menu gives returning guests something new to discover while allowing our kitchen team to continue learning. We believe that a restaurant should always have room for curiosity, creativity, and a little experimentation.",
      },
    ],

    quote: {
      text: "The most exciting dishes are often born when curiosity meets a great ingredient.",
      author: "Chef Lorenzo",
    },

    conclusion:
      "Our seasonal menu is a reflection of how we think about food: stay curious, respect the ingredients, and never stop looking for the next great combination.",
  },
  {
    slug: "the-art-of-flavor-how-we-craft-each-plate-with-care",

    title: "The Art of Flavor: How We Craft Each Plate with Care.",

    image: blogImage1,

    category: "RESTAURANT",

    date: "12 Mar, 2024",

    author: "Cody Fisher",

    authorRole: "Editor",

    authourImage: authourImage,

    introduction:
      "Welcome to Pizzaro! This year, we invite you behind the scenes to witness the artistry and dedication that define our pizzas.",

    sections: [
      {
        heading: "Why Choose Pizzaro?",
        content:
          "At Pizzaro, pizza transcends mere sustenance; it is an art form. We are unwavering in our pursuit of excellence.",
      },
      {
        heading: "1. The Dough: Our Foundation",
        content:
          "Our dough is crafted from a special mix of flours and allowed to rest just right.",
      },
      {
        heading: "2. The Sauce: Our Passion",
        content:
          "Crafted with love, our sauce features sun-kissed tomatoes, gently simmered with aromatic herbs and spices.",
      },
      {
        heading: "3. The Toppings: Our Inspiration",
        content:
          "We are committed to sourcing only the freshest, highest-quality toppings from local farms and trusted producers.",
      },
    ],

    quote: {
      text: "Let Us Create A Pizza That Tells Your Story.",
      author: "Chef Lorenzo",
    },

    conclusion: {
      heading: "The Joy of Sharing",
      content:
        "Pizza is a language everyone understands, perfect for enjoying with loved ones.",
    },
  },
];
