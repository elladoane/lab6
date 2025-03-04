import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../frontend/index.html"), "utf8");

describe("🖼️ Meme Generator UI Tests", () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    test("✅ Should have an input field for search", () => {
        const input = document.querySelector("#searchQuery");
        expect(input).not.toBeNull();
    });

    test("✅ Should have a search button", () => {
        const button = document.querySelector("button");
        expect(button.textContent).toContain("Search Image");
    });

    test("✅ Should have a canvas element for memes", () => {
        const canvas = document.querySelector("#memeCanvas");
        expect(canvas).not.toBeNull();
    });

    test("✅ Should have a generate meme button", () => {
        const button = document.querySelector(".btn.primary");
        expect(button.textContent).toContain("Generate Meme");
    });

    test("✅ Should have a download button", () => {
        const button = document.querySelector(".btn.secondary");
        expect(button.textContent).toContain("Download Meme");
    });
});
