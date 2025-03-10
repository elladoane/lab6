import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.UNSPLASH_ACCESS_KEY;

app.get("/api/search-image", async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: "Query parameter is required" });
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`);
        const data = await response.json();

        // Check if results exist in the data
        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ error: "No images found" });
        }

        res.json({ url: data.results[0].urls.regular });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

app.listen(3000, () => console.log("✅ Server running on port 3000"));
