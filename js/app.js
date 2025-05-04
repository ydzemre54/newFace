const container = document.querySelector(".container");

(async function recupererPlusieurs() {
    try {
        const resultats = await Promise.all([
            fetch("../json/cago.json"),
            fetch("../json/mehmet.json"),
            fetch("../json/3e.json"),
        ]);

        const dataJson = await Promise.all(
            resultats.map(res => res.json())
        );
        afficherContenu(dataJson);
        


    } catch (erreur) {
        console.error(erreur);
    }
}());

function afficherContenu(dataJson) {

    for (let i = 0; i < dataJson.length; i++) {
        const maCard = document.createElement("div");
        let monImage = document.createElement("img");
        monImage.setAttribute("src", dataJson[i].image);
        //monImage.setAttribute("alt", dataJson[i].alt);
        let monCardBody = document.createElement("div");
        let monh5 = document.createElement("h5");
        monh5.textContent = (dataJson[i].Nom);
        let maBase = document.createElement("p");
        maBase.textContent = ( dataJson[i].role);
        

        container.classList.add("card","bg-dark","text-light");
        maCard.classList.add("card-img-top")
        maCard.classList.add("col-2")
        monCardBody.classList.add("card-body");
        monh5.classList.add("card-text");

        container.appendChild(maCard);
        maCard.appendChild(monImage);
        maCard.appendChild(monCardBody);
        monCardBody.appendChild(monh5);
        monCardBody.appendChild(maBase);
        
       
       
    }
   
}