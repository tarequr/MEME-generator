const generateBtn = document.querySelector(".meme-generator .meme-btn");

const image  = document.querySelector(".meme-generator img");
const title  = document.querySelector(".meme-generator .title");
const author = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    image.setAttribute("src", url); 
    title.innerHTML  = title;
    author.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateBtn.addEventListener("click", generateMeme);

generateMeme();