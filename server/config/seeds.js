const db = require("./connection");
const {
  User,
  Product,
  Category,
  Plant,
  Post
} = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Post" },
    { name: "Plant" },
    { name: "Sale" },
  ]);

  console.log("categories seeded");

  await Plant.deleteMany();

  const plants = await Plant.insertMany([
    {
      name: "bamboo",
      waterSched: "2x/day",
      image: "images-1.jpg",
      description: "blah blah blah blah blah",
      username: "Pamela",
      createdAt: new Date().toISOString(),
    },
    {
      name: "grass",
      waterSched: "2x/day",
      image: "images-2.jpg",
      description: "blah blah blah blah blah",
      username: "Pamela",
      createdAt: new Date().toISOString(),
    },
    {
      name: "fern",
      waterSched: "1x/week",
      image: "images-3.jpg",
      description: "blah blah blah blah blah",
      username: "Elijah",
      createdAt: new Date().toISOString(),
    },
    {
      name: "monstera",
      waterSched: "2x/week",
      image: "images-4.jpg",
      description: "blah blah blah blah blah",
      username: "Jimbo",
      createdAt: new Date().toISOString(),
    },
    {
      name: "tree",
      waterSched: "2x/year",
      image: "images-6.jpg",
      description: "blah blah blah blah blah",
      username: "Jimbo",
      createdAt: new Date().toISOString(),
    },
    {
      name: "moss",
      waterSched: "1x/week",
      image: "images-7.jpg",
      description: "blah blah blah blah blah",
      username: "Niki",
      createdAt: new Date().toISOString(),
    },
    {
      name: "melon",
      waterSched: "1x/week",
      image: "images-8.jpg",
      description: "blah blah blah blah blah",
      username: "Grego",
      createdAt: new Date().toISOString(),
    },
    {
      name: "Money Tree",
      waterSched: "1x/week",
      image: "images-9.jpg",
      description: "marketplace plant",
      username: "Syd",
      createdAt: new Date().toISOString(),
    },
    {
      name: "Marigold",
      waterSched: "1x/week",
      image: "images-10.jpg",
      description: "marketplace plant",
      username: "Syd",
      createdAt: new Date().toISOString(),
    },
    {
      name: "fiddlehead fern",
      waterSched: "1x/week",
      image: "images-12.jpg",
      description: "marketplace plant",
      username: "Syd",
      createdAt: new Date().toISOString(),
    },
    {
      name: "cactus",
      waterSched: "1x/week",
      image: "images-13.jpg",
      description: "marketplace plant",
      username: "Taylor",
      createdAt: new Date().toISOString(),
    },
    {
      name: "orchid",
      waterSched: "2x/week",
      image: "images-1.jpg",
      description: "marketplace plant",
      username: "Taylor",
      createdAt: new Date().toISOString(),
    },
    {
      name: "baby rubber plant",
      waterSched: "1x/week",
      image: "images-10.jpg",
      description: "marketplace plant",
      username: "Taylor",
      createdAt: new Date().toISOString(),
    },
    {
      name: "halcyon host",
      waterSched: "1x/week",
      image: "images-12.jpg",
      description: "marketplace plant",
      username: "Taylor",
      createdAt: new Date().toISOString(),
    },
  ]);

  console.log("plants seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Plant 1",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "images-1.jpg",
      price: 2.99,
      quantity: 500,
      plant: plants[0]._id,
      category: categories[0]._id,
    },
    {
      name: "Plant 2",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "images-2.jpg",
      price: 1.99,
      quantity: 500,
      plant: plants[1]._id,
      category: categories[0]._id,
    },
    {
      name: "Plant 3",
      category: categories[1]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "images-3.jpg",
      price: 7.99,
      plant: plants[2]._id,
      quantity: 20,
    },
    {
      name: "Plant 4",
      category: categories[1]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "images-4.jpg",
      price: 3.99,
      plant: plants[3]._id,
      quantity: 50,
    },
    {
      name: "Plant 5",
      category: categories[1]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "images-6.jpg",
      price: 14.99,
      plant: plants[4]._id,
      quantity: 100,
    },
    {
      name: "Plant 6",
      category: categories[2]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "images-7.jpg",
      price: 399.99,
      plant: plants[5]._id,
      quantity: 30,
    },
    {
      name: "Plant 7",
      category: categories[2]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "images-8.jpg",
      price: 199.99,
      plant: plants[6]._id,
      quantity: 30,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  const pam = await User.create({
    username: "Pamela",
    email: "pamela@testmail.com",
    bio: "I love plants duh",
    location: "Chicago, IL",
    password: "password12345",
    profPic:
      "ppl-1.jpg",
    plants: [plants[0]._id, plants[1]._id],
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  const leonard = await User.create({
    username: "Leonard",
    email: "eholt@testmail.com",
    password: "password12345",
    bio: "I hate plants",
    location: "Seattle, WA",
    profPic:
      "ppl-2.jpg",
    plants: [plants[2]._id, plants[0]._id],
    following: [pam._id],
  });

  const jimbo = await User.create({
    username: "Jimbo",
    email: "jim@testmail.com",
    password: "password12345",
    bio: "I am allergic to plants",
    location: "Atlanta, GA",
    profPic:
      "ppl-3.jpg",
    plants: [plants[3]._id, plants[4]._id],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id],
      },
    ],
  });

  const frankie = await User.create({
    username: "frankie",
    email: "frankie@testmail.com",
    password: "password12345",
    bio: "I have too many plants",
    location: "Dallas, TX",
    profPic:
      "ppl-4.jpg",
    plants: [plants[4]._id, plants[5]._id],
    following: [jimbo._id],
  });

  const grego = await User.create({
    username: "Grego",
    email: "greggg@testmail.com",
    password: "password12345",
    bio: "I am scared of plants",
    location: "Detroit, MI",
    profPic:
      "ppl-5.jpg",
    plants: [plants[6]._id],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id],
      },
    ],
    followers: [frankie._id, jimbo._id],
    following: [pam._id],
  });

  const syd = await User.create({
    username: "Syd",
    email: "sydo@testmail.com",
    bio: "I only eat plants",
    location: "Boulder, CO",
    password: "password12345",
    profPic:
      "ppl-6.jpg",
    plants: [plants[7]._id, plants[8]._id, plants[9]._id],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id],
      },
    ],
    followers: [grego._id, jimbo._id],
    following: [pam._id],
  });

  const blah = await User.create({
    username: "Blah",
    email: "blah@testmail.com",
    password: "password12345",
    bio: "I dont know what to put here lmao lol",
    location: "Springfield, OR",
    profPic:
      "ppl-7.jpg",
    plants: [plants[6]._id],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id],
      },
    ],
    followers: [syd._id, grego._id],
    following: [pam._id, frankie._id, syd._id],
  });

  const taylor = await User.create({
    username: "Taylor",
    email: "taylor@testmail.com",
    bio: "plants are life",
    location: "New York, NY",
    password: "password12345",
    profPic:
      "ppl-8.jpg",
    plants: [plants[7]._id, plants[8]._id, plants[9]._id],
    orders: [
      {
        products: [products[2]._id, products[2]._id, products[3]._id],
      },
    ],
    followers: [grego._id, jimbo._id],
    following: [pam._id],
  });

  console.log("users seeded");
  
  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      body: "This is a sample post",
      username: "grego",
      createdAt: new Date().toISOString(),
      userId: grego._id,
      image: "images-1.jpg",
      comments: [
        {
          body: "blah blah blah blah",
          username: "Leonard",
          createdAt: new Date().toISOString(),
          userId: leonard._id,
        },
        {
          body: "i dont get it",
          username: "Jimbo",
          createdAt: new Date().toISOString(),
          userId: jimbo._id,
        },
        {
          body: "very cool wow",
          username: "Syd",
          createdAt: new Date().toISOString(),
          userId: syd._id,
        },
        {
          body: "i love this",
          username: "Pam",
          createdAt: new Date().toISOString(),
          userId: pam._id,
        },
      ],
    },
    {
      body: "Another lovely post",
      username: "frankie",
      createdAt: new Date().toISOString(),
      image: "images-2.jpg",
      userId: frankie._id,
    },
    {
      body: "alsdgjsadkghsaldkgjsaldf",
      username: "pam",
      createdAt: new Date().toISOString(),
      userId: pam._id,
      image: "images-3.jpg",
      comments: [
        {
          body: "blah blah blah blah",
          username: "Grego",
          createdAt: new Date().toISOString(),
          userId: grego._id,
        },
        {
          body: "not very cool at all",
          username: "Jimbo",
          createdAt: new Date().toISOString(),
          userId: jimbo._id,
        },
        {
          body: "not very cool at all",
          username: "Leonard",
          createdAt: new Date().toISOString(),
          userId: leonard._id,
        },
        {
          body: "i hate this",
          username: "Syd",
          createdAt: new Date().toISOString(),
          userId: syd._id,
        },
      ],
    },
    {
      body: "blah blah blah",
      username: "pam",
      createdAt: new Date().toISOString(),
      image: "images-4.jpg",
      userId: pam._id,
    },
    {
      body: "sample x2",
      username: "jimbo",
      createdAt: new Date().toISOString(),
      image: "images-6.jpg",
      userId: jimbo._id,
      comments: [
        {
          body: "blah blah blah blah",
          username: "Grego",
          createdAt: new Date().toISOString(),
          userId: grego._id,
        },
        {
          body: "not very cool at all",
          username: "syd",
          createdAt: new Date().toISOString(),
          userId: syd._id,
        },
      ],
    },
    {
      body: "plants plants plants",
      username: "syd",
      createdAt: new Date().toISOString(),
      image: "images-7.jpg",
      userId: syd._id,
    },
  ]);

  console.log("posts seeded");

  process.exit();
});
