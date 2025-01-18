// script.js

// Add Image to Gallery
function addImage() {
    const imageURL = document.getElementById('imageURL').value;
    if (imageURL) {
        const galleryContainer = document.getElementById('galleryContainer');

        const imageDiv = document.createElement('div');
        imageDiv.style.display = "inline-block";
        imageDiv.style.textAlign = "center";

        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = "User Image";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => galleryContainer.removeChild(imageDiv);

        imageDiv.appendChild(img);
        imageDiv.appendChild(deleteBtn);

        galleryContainer.appendChild(imageDiv);

        document.getElementById('imageURL').value = '';
    } else {
        alert('Please enter an image URL!');
    }
}
