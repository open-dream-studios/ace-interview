import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import messageRoutes from "./routes/messages.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import storyRoutes from "./routes/stories.js";
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import dotenv from 'dotenv';
import { db } from "./connect.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  if (req.headers.authorization) {
    req.accessToken = req.headers.authorization.split(' ')[1]
  }
  next()
})

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});

app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000" || "https://inspireconnect.site",
  credentials: true,
}))

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/relationships", relationshipRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/stories", storyRoutes)

app.listen(PORT, ()=> {
    console.log("API is running on port " + PORT)
})

app.get('/',(req,res)=> {
    res.json({message: "Hello"})
  }
)

app.get('/api/*', (req, res) => {
  res.status(404).json("Page does not exist!");
});


