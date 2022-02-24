export const API = 'https://api.github.com/users/';
export const searchForm =  document.getElementById("searchForm");
let nameProfile;

export const getNameProfile = ()=>{
    return nameProfile;
}

export const setNameProfile = (name)=>{
    nameProfile = name;
}