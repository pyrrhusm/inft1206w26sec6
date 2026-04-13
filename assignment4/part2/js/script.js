/**
 * @fileoverview Creating the code for an image gallery
 * @author Pyrrhus MacKinnon
 * @date 2026-04-13
 * @version 1.0.0
 */

// The buttons from the imageGallery.html
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Listing the images and their alts
const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
];

// Local folder location as the source since I downloaded the images
const baseURL = "./images/";

// Looping through the images
for (const image of images) {
    const newImage = document.createElement("img");
    newImage.src = `${baseURL}${image.filename}`;
    newImage.alt = image.alt;
    newImage.tabIndex = "0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", updateDisplayedImage);
    newImage.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            updateDisplayedImage(e);
        }
    });
}

// Adding the update displayed image function
function updateDisplayedImage(e) {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}

// Using the lighten and darken button
btn.addEventListener("click", () => {
    if (btn.classList.contains("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }
    btn.classList.toggle("dark");
})