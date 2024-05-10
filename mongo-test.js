const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://admin:passw0rd@localhost:27017/learning-app?authSource=admin')
    .then(() => {
        console.log('Connected to MongoDB');
        // Your code here
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    // Create a new Mongoose schema for the articles collection
    const articleSchema = new mongoose.Schema({
        title: String,
        text: String,
        images: [String]
    });

    // Create the articles model using the article schema
    const Article = mongoose.model('Article', articleSchema);

    // Create a new article document
    const newArticle = new Article({
        title: 'Sample Article',
        text: 'This is a sample article.',
        images: ['image1.jpg', 'image2.jpg']
    });

    // Save the new article document to the database
    newArticle.save()
        .then(() => {
            console.log('Article saved to the database');
            // Your code here
        })
        .catch((error) => {
            console.error('Error saving article to the database:', error);
        });