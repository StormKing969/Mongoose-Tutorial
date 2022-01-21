const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // Creates the database if it doesn't exist
    await mongoose.connect('mongodb://localhost:27017/FruitsDB');

    const fruitSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String,
        price: Number
    });

    const Fruit = mongoose.model("Fruit", fruitSchema);

    const apple = new Fruit({
        name: "Apple",
        rating: 7,
        review: "Not bad",
        price: 1.20
    });

    const banana = new Fruit({
        name: "Banana",
        rating: 3,
        review: "Good for your health",
        price: 0.80
    });

    const orange = new Fruit({
        name: "Orange",
        rating: 9,
        review: "Tasty but better as a drink",
        price: 1.25
    });

    const mango = new Fruit({
        name: "Mango",
        rating: 5,
        review: "Ok",
        price: 1.00
    });

    // apple.save();

    // Fruit.insertMany([banana, orange, mango], function(err) {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log("Successful");
    //     }
    // });

    const personSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    const Person = mongoose.model("Person", personSchema);

    const person = new Person({
        name: "John",
        age: 37
    });

    // person.save();

    Fruit.find(function(err, fruits) {
        if(err) {
            console.log(err);
        } else {
            fruits.forEach(element => {
                console.log(element.name);
            });
        }
    });
  }