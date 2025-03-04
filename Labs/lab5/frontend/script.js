

async function searchImage() {
    const query = document.getElementById("searchQuery").value;
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    try {
        console.log(`Fetching: http://localhost:3000/api/search-image?query=${query}`);
        const response = await fetch(`http://localhost:3000/api/search-image?query=${query}`);
        console.log("Raw response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response JSON:", data);

        if (!data.url) {
            alert("No image found. Try another search term.");
            return;
        }

        loadMemeImage(data.url);
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to load image. Please try again.");
    }
}

function loadMemeImage(url) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = function () {
        drawMeme(img);
    };
}

function drawMeme(img) {
    const canvas = document.getElementById("memeCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width / 2;
    canvas.height = img.height / 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function generateMeme() {
    const canvas = document.getElementById("memeCanvas");
    const ctx = canvas.getContext("2d");
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    ctx.font = "30px Impact";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.textAlign = "center";

    ctx.fillText(topText, canvas.width / 2, 40);
    ctx.strokeText(topText, canvas.width / 2, 40);
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

function downloadMeme() {
    const canvas = document.getElementById("memeCanvas");
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}