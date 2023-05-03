const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const trackContainer = document.querySelector('#tracks');
    tracksContainer.innerHTML ='';

    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const data = await fetch(url).then (response =>response.json());
    console.log(data);

    for (let i = 0; i < 5; i++){
        const track =data [i];
        const trackItem = document.createElement('section');
        trackItem.classList.add('track-item', 'preview');
        trackItem.setAttribute('data-track-id', track.id);

        trackItem.innerHTML = `
        <img src="${track.album.image_url}" alt="track ${track.name}"></i>
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
        <h2>${track.name}</h2>
        <p>${track.artist.name}</p>
        </div>
        `;
        
        trackItem.addEventListener('click', ()=> loadTrack(track.id));
        trackItem.addEventListener('keydown', (event)=> {
            if (event.key=== 'Enter' || event.key === ''){
                event.preventDefault();
                loadTrack(track.id);
            }
        });
    }
}



async function getAlbums (term) {
    document.querySelector('#albums').innerHTML = '';

    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const data = await fetch (url).then(response=> response.json());
    console.log(data);

    data.forEach(album =>{
        const template = `
        <section class="album-card" id="${album.id}">
        <div>
        <img src "${album.image_url}" alt="album ${album.name}">
        <h2>${album.name}</h2>
        <div class="footer">
        <a href ="${album.sptify_url}" target="_blank>
        veiw on spotify
        </a>
        </div>
        </section>
        
        `;
        document.querySelector('albums').innerHTML += template;
    });
}

async function getArtist (term) {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}