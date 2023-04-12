import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect("mongodb+srv://Atharv:fQNCSgeYdX7UU29M@cluster0.gieqe9b.mongodb.net/myDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
