const body = document.body;

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0 ) {
    body.classList.remove("scroll-up")
  } 

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if (currentScroll < 20 && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }
  if (currentScroll > 1200 && !body.classList.contains("scrolldown")) {
      body.classList.add("scrolldown")
  }

  if (currentScroll < lastScroll && body.classList.contains("scrollup")) {
      body.classList.remove("scrollup")
      body.classList.add("scrolldown")
  }

  if (currentScroll > lastScroll && body.classList.contains("scrolldown")) {
    body.classList.remove("scrolldown")
    body.classList.add("scrollup")
  }
  lastScroll = currentScroll

  console.log(lastScroll)
})


const urlBdd = "http://62.4.21.200:1337/api/testimonies?populate=*";
const urlImg = "http://62.4.21.200:1337";


let container = document.querySelector('#carousseltemoignage');


fetch(urlBdd)
    .then(response => response.json())
    .then(data =>{

        for(let i=0; i< data.meta.pagination.total ; i++) {
            let article = document.createElement("div")
            let generateHtml=`
                <a href="/ambassadeurs.html" class="liendudiapotem">
                    <img src="${urlImg}${data.data[i].attributes.Picture.data[0].attributes.formats.medium.url}" class="imgducarousselt">

                    <div id="textepourimagetem">
                        <img src="Images/coeur.png" alt="logo coeur" class="coeurcaroussel">
                        <p class="textetemoignagec"> Virée de ${data.data[i].attributes.description_maps.data[0].attributes.depart} à ${data.data[i].attributes.description_maps.data[0].attributes.arrive} pour ${data.data[i].attributes.NameWitness}</p>
                    </div>
                </a>`

                console.log(data.data[i].attributes.Picture.data[0].attributes.formats.medium.url)

                article.innerHTML = generateHtml
                container.append(article) 
             }

    })