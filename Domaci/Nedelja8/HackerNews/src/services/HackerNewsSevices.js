import axios from 'axios';

const baseUrl = `https://hacker-news.firebaseio.com/v0`;

const storyUrl = `${baseUrl}/item`;

const typeOfStories = [           //niz koji sadrzi tri moguca zahteva (linka) za poziv servera po vrsti clanaka
    `${baseUrl}/newstories.json`, //latest
    `${baseUrl}/topstories.json`, //top
    `${baseUrl}/beststories.json` //best
]



export const getStoryIds = async (n) => {                  //funkcija na osnovu indexa (n) uzima adekvatan link i vraca niz ID-eva trazenog tipa clanaka
    return axios.get(typeOfStories[n]).then(({data}) => {
        return data;
    })
}



export const getStory = async (id) => {  //funkcija 
    return await axios.get(`${storyUrl}/${id}.json`)
                      .then(({data}) => {
                          
                        if(data && (data!=={}) && (data.url && data.title)){  // proverava ispravnost dobijenih podataka i vraca ispravne podatke ili null (ako je data null, undefind ili je prazan objekat ili ne sadrzi naslov ili link)
                            return ({by:data.by, time:data.time, url:data.url, title:data.title, score:data.score});
                        }
                        else{
                            return null;
                        }
                      })
}