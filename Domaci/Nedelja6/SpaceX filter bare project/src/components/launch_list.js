import { getPastLaunches } from '../services/spacex_service'
import Launch from './launch';




// Funkcija koja na osnovu ulaznog parametra generise filter(select) i listu, ili samo listu
// ako je pozvana bez ulaznog parametra generisace filter sa mogucim opcijama i celokupnu listu
// ako je pozvana sa ulaznim parametrom generisace samo listu na osnovu parametra  
// parametar moze biti neka od ponudjenih godina ili "all"- generise celokupnu listu


const LaunchList = (year) => {

    const divs = document.createElement('div');          //div koji sadrzi filter i listu

    const divFilter = document.createElement('div');     //div koji sadrzi samo filter

    const select = document.createElement('select');     //filter ("select" element)
    select.id = 'launch-filter';

    const optionAll = document.createElement("option");  //prva opcija u filteru koja prikazuje sva lansiranja
    optionAll.value = "all";
    optionAll.innerHTML = "Show all";
    select.append(optionAll);

    const divList = document.createElement('div');        //div koji sadrzi listu lansiranja
    divList.className = 'launch-list';

    const load = document.createElement("h1")             //Text koji obavestava da je u toku ucitavanje podataka
    load.className ="loading";
    load.innerHTML = "Loading...";
    divList.appendChild(load)
    
    getPastLaunches().then(response => {
        let { data } = response;
        
        divList.innerHTML = "";

        let years = [];  // pomocni niz u koji smestamo moguce godine za filtriranje

        data.forEach(element => {
            let {launch_year} = element;

            if(year == undefined || year == "all"){  //proveravamo da li je funkcija pozvana bez ulaznog parametra ili sa parametrom "all"
                
                divList.appendChild(Launch(element)); 

                if(!years.includes(launch_year)){  //proveravamo da li smo tu godinu vec uneli u filter kao opciju, ako nismo unosimo je
                    years.push(launch_year);

                    const option = document.createElement("option");
                    option.value = launch_year;
                    option.innerHTML = launch_year;
                    select.append(option);
                }
            }
            else if (launch_year == year){   //podrazumevamo da je prosledjena tacna godina kao parametar
                                
                divList.appendChild(Launch(element));
            }
            
        });

    }, error => { console.log(error) });

    select.addEventListener("change",e=>{      //event funkcija koja reaguje na promenu opcije u selektu i menja prethodno generisanu listu sa novom
        divs.replaceChild(LaunchList(e.target.value),e.target.parentElement.nextSibling);
    });


    if(year != undefined){   // vraca samo div sa filtiranom listom na osnovu ulaznog parametra 
        return divList;
    }
    else{                        // vraca div koji sadrzi generisan div sa filterom i div sa celokupnom listom
        divFilter.append(select);
        divs.append(divFilter,divList);
    
        return divs;
    }
}
export default LaunchList;