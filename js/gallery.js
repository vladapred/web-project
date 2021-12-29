const unsplashApiKey = 'uNM0UpCljw-ht8P9uLTTa_Oqzdw0eUqRXW8BpQwzLK0'
const apiEntery = 'https://api.unsplash.com/search/photos'

function onPageLoaded() {
    const searchbar = document.querySelector("input[type='text']");

    searchbar.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            loadPhotos(searchbar.value)
        }
    });

    loadPhotos("art")
}

async function loadPhotos(photoRequest) {
    const galery = document.querySelector("#gridTable");
    galery.innerHTML = ""
    let activityGif = document.createElement('img')
    activityGif.src = "/img/gallery/activityIndicator.gif"
    activityGif.className = "activity"
    galery.appendChild(activityGif)
    let url = apiEntery + `?query=${photoRequest}&client_id=${unsplashApiKey}`
    console.log(url)
    fetch(url)
        .then(res => res.json())            
        .catch(error => {
            galery.innerHTML = `<p>Error ${error} :( </p>` 
        })
        .then(response => {
            console.log(response)
            var elementsArray = []
            response.results.forEach(element => {
                let image = document.createElement('img')
                image.src = element.urls.regular
                image.className = "galery-image"
                elementsArray.push(image.outerHTML)
            })
            console.log(elementsArray)
            galery.innerHTML = elementsArray
        })
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
