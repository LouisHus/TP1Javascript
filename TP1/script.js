const root = document.getElementById('root');

const img = "https://www.solidarite-peuple-animal.com/data/document/1/183.800.jpg";
const articles = [
    {title: "title#1", image: img},
    {title: "title#2", image: img},
    {title: "title#3", image: img}
]
articles.forEach((article) => {
    const art = document.createElement("article");
    const title = document.createElement("h1");
    const image = document.createElement("img");

    title.textContent = article.title;
    image.src = article.image;
    image.width = "200";
    image.height = "150";

    root.appendChild(art);
    art.appendChild(title);
    art.appendChild(image);
})