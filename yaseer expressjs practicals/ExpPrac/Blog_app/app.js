// // //  // app.js
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const dotenv = require('dotenv');
// // // const postRoutes = require('./routes/postRoutes');
// // // const path = require('path');

// // // dotenv.config();

// // // const app = express();

// // // // Middleware
// // // app.use(express.urlencoded({ extended: true }));
// // // app.use(express.static(path.join(__dirname, 'public')));

// // // // EJS
// // // app.set('view engine', 'ejs');

// // // // Routes
// // // app.use('/', postRoutes);

// // // // MongoDB
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // }).then(() => {
// // //   app.listen(3000, () => console.log("Server running on http://localhost:3000"));
// // // }).catch(err => console.error(err));


// // const express = require('express');
// // const app = express();
// // const path = require('path');
// // const mongoose = require('mongoose');
// // const postRoutes = require('./routes/postRoutes');

// // // Connect to MongoDB (adjust URI as needed)
// // mongoose.connect('mongodb://localhost:27017/blogdb', { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.log('MongoDB connection error:', err));

// // app.set('view engine', 'ejs');
// // app.set('views', path.join(__dirname, 'views'));

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, 'public')));

// // // Mount routes at /posts
// // app.use('/posts', postRoutes);

// // app.listen(3000, () => {
// //   console.log('Server running on http://localhost:3000');
// // });


// const express = require('express');
// const app = express();
// const path = require('path');
// const mongoose = require('mongoose');
// const postRoutes = require('./routes/postRoutes');

// mongoose.connect('mongodb://localhost:27017/blogdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/posts', postRoutes);

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
// app.get('/', (req, res) => {
//   res.redirect('/posts');
// });

// app.use((req, res) => {
//   res.status(404).send('404: Page not found');
// });


const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');

mongoose.connect('mongodb://localhost:27017/blogdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Redirect root to /posts
app.get('/', (req, res) => {
  res.redirect('/posts');
});

// ✅ Mount blog routes
app.use('/posts', postRoutes);

// ✅ 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
