// Api Key 	jtYqadWRKx72BzGV49x8te6qhRzyMMm5
const key = 'jtYqadWRKx72BzGV49x8te6qhRzyMMm5';

// get Weather

const getWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const querry = `${id}?apikey=${key}`;

    const response = await fetch(base + querry);
    const data = await response.json();
    return data[0];
    
}


// get city
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const querry = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + querry);

    const data = await response.json();
    return data[0];

};


