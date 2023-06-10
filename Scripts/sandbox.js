const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('body > div > div > img');
const icon = document.querySelector('.icon img');




const updateUI = (data) =>{

    // const cityDet = data.cityDet;
    // const weather = data.weather;

    const {cityDet, weather} = data;    
    details.innerHTML =`
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-5 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
    `

    // remove d-none
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

 
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc);

     
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }else{
    //     timeSrc = 'img/night.svg';
    // }
    time.setAttribute('src', timeSrc);


}


const updateCity = async (city) =>{
const cityDet = await getCity(city);
const weather = await getWeather(cityDet.Key)
return {cityDet,weather};
}



cityForm.addEventListener('submit', e =>{
    e.preventDefault();
    //  get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    const scrol = setTimeout(() =>{
        scrollTo(0, 400);

    },400 )   
    // update the ui
    updateCity(city).then(data =>{updateUI(data);
    }).catch(err => console.log(err));
});

