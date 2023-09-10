function restCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countrisAll(data))
}

function countrisAll(show){
    // console.log(show);
    const showCountry = show.map(country => getCountryHtml(country))
    document.getElementById('countris').innerHTML = showCountry.join('');
}

const getCountryHtml = country => {
    console.log(country);

    const {name,flags, region} = country;
    return `
    <div class='country'>
    <h2>${name.common}</h2>
    <img src ="${flags.png}">
    <p>${region}</p>
    </div>
    `
}
restCountry()