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

    const fruit = new Fruit({
        name: "Apple",
        rating: 7,
        review: "Not bad",
        price: 1.20
    });

    // fruit.save();

    const personSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    const Person = mongoose.model("Person", personSchema);

    const person = new Person({
        name: "John",
        age: 37
    });

    person.save();
  }