const container = document.getElementById("imageList");
const headDiv = document.createElement("div");
const newDiv = document.createElement("div");
const divForZoomImage = document.createElement("div");
const divForRandomImageHolder = document.createElement("div");
container.append(headDiv);
container.append(newDiv);
container.append(divForZoomImage);
container.append(divForRandomImageHolder);
// divForRandomImageHolder.append(divForZoomImage);
headDiv.innerHTML = "Image Viewer";
headDiv.className = "headDiv__placeHolder";
newDiv.className = "divHoldingImages";
divForRandomImageHolder.className = "innerDiv";
divForZoomImage.className = "sideDiv";
// divForZoomImage.innerHTML = "image to be zoomed here";

// changing the h2
const headline = document.querySelector("h2");

// const imageInDiv = document.createElement("img");
// newDiv.append(imageInDiv);

for (let i = 1; i < 10; i++) {
  const imageInDiv = document.createElement("img");
  divForRandomImageHolder.append(imageInDiv);
  imageInDiv.className = "imageClick";
  imageInDiv.id = "image_id_" + i;
  // imageInDiv.src = "https://picsum.photos/200/300";
  imageInDiv.src = "https://picsum.photos/200/300" + "?" + i;
}

let enlargedImage = null;

function handleOnImageClick(event) {
  if (!enlargedImage) {
    enlargedImage = document.createElement("img");
    divForZoomImage.append(enlargedImage);
  }

  enlargedImage.src = event.target.src;

  // divForZoomImage.append(imageGrid[0]);
}
const imageGrid = divForRandomImageHolder.getElementsByClassName("imageClick");
for (index = 0; index < imageGrid.length; index++) {
  let img = imageGrid[index];
  img.addEventListener("click", handleOnImageClick);
}
