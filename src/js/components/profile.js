import {API, getNameProfile} from './variables.js';
import loadErrorPage from './errorPage.js'

const showProfile = async () =>{
    
    try{        
        const response = await fetch(API.concat(getNameProfile()));
        if(!response.ok){
            throw new Error(response.status);
        }
        const datos = await response.json();
        loadProfile(datos);
        
    }catch(e){
        loadErrorPage(e)
    }
}

const loadProfile = (data) => {
    
    header.classList.add('header--top');
    document.querySelector("main").style.display = "none";
    document.querySelector("main").style.display = "block";

    document.querySelector("main .content").style.display = "flex";
    document.querySelector("main .errorPage").style.display = "none";
    document.querySelector("main").classList.add("main--content");
    document.querySelector(".gitHubSearch").style.height = "auto";

    const   {name, login, avatar_url, followers, location, blog} = data;

    const   profileName         = document.getElementById("profileName"),
            imgAvatar           = document.getElementById("imgAvatar"),
            nickName            = document.getElementById("nickName"),
            followersProfile    = document.getElementById("followersProfile"),
            country             = document.getElementById("followersProfile"),
            webSite             = document.getElementById("webSite"),
            loader              = document.getElementById("loader");



    profileName.textContent = name;
    nickName.textContent = login;
    imgAvatar.src= avatar_url;
    followersProfile.textContent = followers;
    country.textContent = location;
    webSite.textContent = blog;
    webSite.href = blog

    loader.style.display = "none";


}

export { showProfile, loadProfile };