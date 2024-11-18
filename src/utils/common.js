export function setCookie(data, exdays=1) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    let cookie_field = ['email','family_name', 'given_name','picture','name', 'id']
    cookie_field.forEach(function(cname){
        document.cookie = cname + "=" + data[cname] + ";" + expires + ";path=/";
    })

}
export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
    const year = date.getFullYear(); // Get full year

    return `${year}-${month}-${day}`; // Format as dd-mm-yyyy
};
export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
        }
    }
        return "";
    }

export function checkCookie() {
    let user = getCookie("id");
    return user ? 1 : 0
}

export function eraseCookie() {
    let cookie_field = ['email','family_name', 'given_name','picture','name', 'id']   
    cookie_field.forEach(function(cname){
        document.cookie = cname+'=; Max-Age=-99999999;';  
    })
    
}

const colorMap = {};
const selectedColors = {};

export const generateColor = () => {
let randomColorString = "#";
const arrayOfColorFunctions = "0123456789abcdef";
for (let x = 0; x < 6; x++) {
let index = Math.floor(Math.random() * 16);
let value = arrayOfColorFunctions[index];

randomColorString += value;
}
return randomColorString;
};

export const newColorFind = id => {
// If already generated and assigned, return
if (colorMap[id]) return colorMap[id];

// Generate new random color
let newColor;

do {
newColor = generateColor();
} while(selectedColors[newColor]);

// Found a new random, unassigned color
colorMap[id] = newColor;
selectedColors[newColor] = true;

// Return next new color
return newColor;
}


export function getQueryStringParameter(paramToRetrieve) {
var params = document.URL.split("?")[1]
if (params) {
params = params.split("&");
for (var i = 0; i < params.length; i = i + 1) {
    var singleParam = params[i].split("=");
    if (singleParam[0] === paramToRetrieve)
        return singleParam[1];
}
} else {
  return null;
}

}

export const updateQueryStringParameter = (uri, key, value) => {
const re = new RegExp(`([?&])${key}=.*?(&|$)`, "i");
const separator = uri.includes('?') ? "&" : "?";
if (uri.match(re)) {
  return uri.replace(re, `$1${key}=${value}$2`);
}
return uri + separator + key + "=" + value;
};