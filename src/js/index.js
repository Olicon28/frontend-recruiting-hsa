import {searchForm, setNameProfile} from './components/variables.js';
import {showProfile} from './components/profile.js';
import {showRepos} from './components/repos.js';
import '../sass/index.scss';

searchForm.addEventListener('submit', async (event) => {

    try{
        const searchInput = document.getElementById("searchInput");
        event.preventDefault();

        setNameProfile(searchInput.value);

        ;
        await showProfile();
        await showRepos();
    }catch(e){
        console.log(new Error(e));
    };



});











