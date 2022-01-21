const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try {
        // Creates the database if it doesn't exist
        await mongoose.connect('mongodb://localhost:27017/FruitsDB');

        const fruitSchema = new mongoose.Schema({
            name: {
                type: String,
                required: [true, "Please check your entry"]
            },
            rating: {
                type: Number,
                min: 1,
                max: 10
            },
            review: String,
            price: Number
        });
    
        const Fruit = mongoose.model("Fruit", fruitSchema);

        // Fruit.deleteOne({
        //     name: "Pineapple"
        // }, function(err) {
        //     console.log(err);
        // });
    
        CreateFruit(Fruit);
    
        FindAllItems(Fruit);
    
        const personSchema = new mongoose.Schema({
            name: String,
            age: Number,
            favouriteFruit: fruitSchema
        });
    
        const Person = mongoose.model("Person", personSchema);

        // Person.deleteMany({
        //     name: "John"
        // }, function(err) {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log("Successful");
        //     }
        // })

        // ============ ALL ITEM CREATION MUST BE TOGETHER ====================
        const berry = new Fruit({
            name: "Berry",
            rating: 7,
            review: "It's good but could be better",
            price: 1.36
        });

        // berry.save();

        const john = new Person({
            name: "John",
            age: 37
        });
    
        // Person.updateOne({
        //     name: "John"
        // }, {
        //     favouriteFruit: berry
        // }, function(err) {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log("Successful");
        //     }
        // })

        // const amy = new Person({
        //     name: "Amy",
        //     age: 12,
        //     favouriteFruit: pineapple
        // });
    
        // amy.save();

    } catch (error) {
        console.error(error);
        
    } finally {
        setTimeout(function() {
            mongoose.connection.close()
        }, 100);
    } 
}

function FindAllItems(Database_Obj) {
    let Fruit = Database_Obj;

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

function CreateFruit(Database_Obj) {
    let Fruit = Database_Obj;

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
    
    const grape = new Fruit({
        name: "Grape",
        rating: 7,
        review: "It good and easy to eat",
        price: 0.95
    });

    const strawberry = new Fruit({
        name: "Strawberry",
        rating: 10,
        review: "It good and easy to eat",
        price: 0.95
    });

    const pineapple = new Fruit({
        name: "Pineapple",
        rating: 9,
        review: "It's good ",
        price: 3.95
    });

    // Insert one item only
    // pineapple.save();

    // Fruit.insertMany([banana, orange, mango], function(err) {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log("Successful");
    //     }
    // });
}