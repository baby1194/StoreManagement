import axios from 'axios';

const fetchData = (country) => {
  let url = 'https://covid19.mathdro.id/api'; 

  if(country) {
    url = `${url}/countries/${country}`;
  }

  return axios.get(url)
    .then(({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
      return ({
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: lastUpdate
      });
    });
}

export default fetchData;