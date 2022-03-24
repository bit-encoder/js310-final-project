const canv = document.getElementById('project-canvas');
const imgTag = document.createElement('img');
const imgButton = document.getElementById('call-picture');

const API_URL = `https://api.unsplash.com/`;
const API_SUFFIX = `?client_id=${ACCESS_KEY}`;

let api_call = `${API_URL}/photos/random/${API_SUFFIX}`;

// Could not figure out how to wrap this inside a function
fetch(api_call)
.then(function(data){return data.json()})
.then(function(data){
    let random_pic = data.urls.small;
    imgTag.setAttribute('src', random_pic);
    canv.appendChild(imgTag);
})

function getMeAPicture() {
    window.location.reload();
}

imgButton.addEventListener('click', getMeAPicture);