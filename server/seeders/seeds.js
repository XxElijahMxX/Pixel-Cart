// const faker = require("faker");

const db = require("../config/connection");
const Product = require("../models/Product");

const products = [
  {

    "title": "Playstation 1",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1200px-PSX-Console-wController.png",
    "price": 29.99,
    "review": 3
  },
  {

    "title": "Playstation 2 (Fat Model)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/PS2-Fat-Console-Set.png",
    "price": 69.99,
    "review": 5
  },
  {
 
    "title": "Playstation 2 (Slim Model)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/PS2-Slim-Console-Set.png/1200px-PS2-Slim-Console-Set.png",
    "price": 39.99,
    "review": 4
  },
  {
 
    "title": "Nintendo 64",
    "image": "https://dodo.ac/np/images/thumb/8/8d/Nintendo_64.png/2560px-Nintendo_64.png",
    "price": 99.99,
    "review": 4
  },
  {
  
    "title": "Gameboy Color",
    "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png",
    "price": 64.99,
    "review": 4
  },
  {
   
    "title": "Nintendo Gamecube",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Console-Set.png/1200px-GameCube-Console-Set.png?20220803031219",
    "price": 99.99,
    "review": 5
  },
  {
   
    "title": "Xbox",
    "image": "https://static.wikia.nocookie.net/xbox/images/3/3a/Original-xbox.png",
    "price": 59.99,
    "review": 4
  },
  {
    
    "title": "Super Nintendo",
    "image": "http://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/fd/SNES.png",
    "price": 49.99,
    "review": 5
  }
]

db.once("open", async () => {
  await Product.deleteMany({});
  await Product.collection.insertMany(products)
  // await User.deleteMany({});
  

  //User faker seed data
  // create user data
  // const userData = [];

  // for (let i = 0; i < 50; i += 1) {
  //   const username = faker.internet.userName();
  //   const email = faker.internet.email(username);
  //   const password = faker.internet.password();

  //   userData.push({ username, email, password });
  // }

  

  // const createdUsers = await User.collection.insertMany(userData);

  // // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(
  //       Math.random() * createdUsers.ops.length
  //     );
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

  console.log("all done!");
  process.exit(0);
});
