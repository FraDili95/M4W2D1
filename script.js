
const punctButtonSearch = document.getElementById("input_button");

punctButtonSearch.addEventListener("click", function(event) { // evento associato alla ricerca
    event.preventDefault();
    const punctInputSearch = document.getElementById("input_testo").value; // ottengo il valore dall'input
    const punctWorkstation = document.querySelector("#workstation");
    console.log(punctInputSearch);
    punctWorkstation.innerHTML = ""; // pulisco il tavolo;

    fetch(`https://api.pexels.com/v1/search?query=${punctInputSearch}`, {
            headers: { Authorization: "rsVX4UPREk1uI05E6TaWzr1o94qLmZ9zzqq2fFI7TLxS0DhfToYJDyqG" }//chiave
        })
        .then(response => response.json()) // converto la risposta in formato JSON
        .then(data => makeResult(data, punctWorkstation) ) // processo i dati ottenuti
        .catch(error => console.error("Errore: ", error)); // gestisco eventuali errori
});

function makeResult( jsonData, table ){
    console.log( jsonData )
    jsonData.photos.forEach( photo  => {
        table.innerHTML +=
        `
            <div class="card padre" style="width: 18rem; ">
            <img src="${photo.src.large}" class="card-img-top" alt="${photo.alt}">
            <h5 class="card-title">${photo.photographer}</h5>
            </div>
        `

    });
}

/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/