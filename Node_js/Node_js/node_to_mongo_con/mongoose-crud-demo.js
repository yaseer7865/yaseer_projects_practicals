const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 2. Define a schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model('User', userSchema);

async function runCRUD() {
  try {
    // INSERT
    const newUser = new User({ name: 'Alice', age: 25 });
    await newUser.save();
    console.log('Inserted:', newUser);

    // FIND
    const users = await User.find();
    console.log('All users:', users);

    // UPDATE
    const updatedUser = await User.findOneAndUpdate(
      { name: 'Alice' },
      { age: 26 },
      { new: true }
    );
    console.log('Updated:', updatedUser);

    // DELETE
    const deletedUser = await User.findOneAndDelete({ name: 'Alice' });
    console.log('Deleted:', deletedUser);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    mongoose.connection.close();
  }
}

runCRUD();