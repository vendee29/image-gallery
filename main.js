"use strict";

const images = [
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy0.jpg?ver=0",
    title: "Adorable pup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy2.jpg?ver=0",
    title: "What r u looking at?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy3.jpg?ver=0",
    title: "Sleeping doggo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy4.jpg?ver=0",
    title: "Busted!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy6.jpg?ver=0",
    title: "Occupying couch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy7.jpg?ver=0",
    title: "Adult Sammy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
  {
    src: "https://img32.rajce.idnes.cz/d3201/18/18241/18241380_eb9b4367c8dc67bbe545265281aeb14a/images/sammy8.jpg?ver=0",
    title: "Compact dog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi ex, semper ut faucibus eget, bibendum et quam.",
  },
];

/////////////////// Thumbnails ///////////////////

let preview = document.querySelector(".thumbnails ul");

for (let i = 0; i < images.length; i++) {
  let thumb = document.createElement("li");
  let imgThumb = document.createElement("img");
  thumb.setAttribute("class", "not-selected");
  imgThumb.setAttribute("src", images[i].src);
  thumb.appendChild(imgThumb);
  preview.appendChild(thumb);
}

/////////////////////// Main Image //////////////////////////

let mainImage = document.querySelector(".mainImg img");
let heading = document.querySelector(".mainImg h1");
let description = document.querySelector(".mainImg p");
let thumbs = document.querySelectorAll(".thumbnails li");

let imagesSrc = [];

for (let image of images) {
  imagesSrc.push(image.src);
}

let backgroundImg = document.querySelector(".background-image");

function setHeading(num) {
  heading.innerHTML = images[num].title;
}

function setDescription(num) {
  description.innerHTML = images[num].description;
}

function setBackgroundImg(num) {
  backgroundImg.setAttribute(
    "style",
    `background: url(${imagesSrc[num]}); background-size: cover;`
  );
}

function setMainImage(num) {
  mainImage.setAttribute("src", images[num].src);
  setHeading(num);
  setDescription(num);
  setBackgroundImg(num);
  thumbs[num].setAttribute("class", "selected");
}

setMainImage(0);