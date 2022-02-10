import {API, nameProfile} from './variables.js';
import loadErrorPage from './errorPage.js'


const showRepos = async () => {
    try{
        const response = await fetch(API.concat(nameProfile).concat("/repos"));
        if(!response.ok){
            throw new Error(response.status);
        }
        const datos = await response.json();
        loadRepos(datos);

    }catch(e){
        loadErrorPage(e)
    }
}

const loadRepos = (data)=>{

    let repositories =  document.getElementById("repositories");

    repositories.innerHTML = "";
    for(d of data){
        let div = document.createElement("div");

        const   {html_url , name, description, size} = d;


        div.classList.add("repositories__item");

        div.innerHTML = `
            <a href="${html_url}" target="_blank">
                <h2 class="repositories__name">${name}</h2>
            </a> 
            <p class="repositories__description">${description}</p>
            <div class="repositories__stars">
                <i class="far fa-star"></i>
                <span class="number">${size}</span>  
            </div>`;
        repositories.appendChild(div);
    }
    
}

export {showRepos, loadRepos};