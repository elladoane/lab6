import request from "supertest";
import { app } from "../backend/netlify/functions/api.js";

import * as test from "node:test";

describe("🛠️ Meme Generator API Tests", () => {
    test("✅ Should return an image URL for a valid search query", async () => {
        const res = await request(handler).get("/api/search-image?query=cat");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("url");
    });

    test("❌ Should return 400 if no query is provided", async () => {
        const res = await request(handler).get("/api/search-image");
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("error", "Query parameter is required");
    });

    test("❌ Should return 404 if no images are found", async () => {
        const res = await request(handler).get("/api/search-image?query=nonexistentimage123");
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("error", "No images found");
    });
});
