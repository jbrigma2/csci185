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
   const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const data = await fetch (url).then(response=> response.json());
   // console.log(data);
   const artist = data[0];
   const template = `
   <section class ="artist-card" id="${data[0].id}">
   <div>
   <img src="${data [0].image_url}" alt="${data [0].name} profile picture">
   <h2>${data[0].name}</h2>
   <div class="footer">
   <a href="${data[0].spotify_url}" target="_blank
   view on spotify 
   </a>
   </div>
   </div>
   </section>
   `
;
document.querySelector('#artist').innerHTML = template;
}

function loadTrack(trackId){

    const iframe= document.childElement('iframe');
    iframe.src= `https://open.spotify.com/embed/track${trackId}`;
    iframe.width = '100%';
    iframe.height= 352;
    iframe.frameBorder = 0;
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';


    const artistSection = document.querySelector('#artist');
    artistSection.innerHTML = '';


    artistSection.appendChild(iframe);


    const artistSectionTitle = document.querySelector('#artist-section h1');
    artistSectionTitle.innerHTML = 'Now Playing';
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}