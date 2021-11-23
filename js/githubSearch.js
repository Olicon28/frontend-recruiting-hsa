const API = 'https://api.github.com/users/';

searchForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let nameProfile = searchInput.value;


    fetch(API.concat(nameProfile))
        .then(response => {
            
            if (!response.ok) throw Error(response.status);

            return response.json();
        })
        .then(data => loadProfile(data))
        .catch(e => loadErrorPage(e));

    fetch(API.concat(nameProfile).concat("/repos"))
        .then(response => {
            if (!response.ok) throw Error(response.status);

            return response.json();
        })
        .then(dataRepos => loadRepos(dataRepos))
        .catch(e => loadErrorPage(e));


    const loadProfile = (data) => {
    
        header.classList.add('header--top');
        document.querySelector("main").style.display = "none";
        document.querySelector("main").style.display = "block";

        document.querySelector("main .content").style.display = "flex";
        document.querySelector("main .errorPage").style.display = "none";
        document.querySelector("main").classList.add("main--content");
        document.querySelector(".gitHubSearch").style.height = "auto";

        const   {name} = data,
                {login} = data,
                {avatar_url} = data,
                {followers} = data,
                {location} = data,
                {blog} = data;


        profileName.textContent = name;
        nickName.textContent = login;
        imgAvatar.src= avatar_url;
        followersProfile.textContent = followers;
        country.textContent = location;
        webSite.textContent = blog;
        webSite.href = blog

        loader.style.display = "none";


    }

    const loadRepos = (data)=>{
        repositories.innerHTML = "";
        for(d of data){
            let div = document.createElement("div");

            const   {html_url} = d,
                    {name} = d,
                    {description} = d,
                    {size} = d;


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

    const loadErrorPage = (e) => {
        header.classList.add('header--top');
        document.querySelector("main").style.display = "block";
        document.querySelector("main .content").style.display = "none";
        document.querySelector("main .errorPage").style.display = "flex";
        document.querySelector("main").classList.add("main--content");
        document.querySelector(".gitHubSearch").style.height = "auto";

        document.querySelector("main .errorPage").innerHTML = `
            <h2>User not found :(</h2>
            <p>${e}</p>`;       
    }
});



// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json'},
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) 
    });

    return response.json(); 
  }
  
  postData('https://example.com/answer', { answer: 42 })



    fetch("https://api.shutterstock.com/v2/images/search", {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({
            "data-urlencode" : "query=kites"
        }) 
      }).then(data => console.log(data))
        .catch(e => console.log(e));