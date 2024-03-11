// script.js
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const gallery = document.getElementById('gallery');

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() !== '') {
        const response = await fetch(`/api/photos/${searchTerm}`);
        const data = await response.json();
        displayPhotos(data.photos.photo);
    }
});

function displayPhotos(photos) {
    gallery.innerHTML = '';
    photos.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo');
        const img = document.createElement('img');
        img.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        img.alt = photo.title;
        photoElement.appendChild(img);
        gallery.appendChild(photoElement);
    });
}
