import { getInfo } from "../services/spacex_service";

const Header = ()=>{
    const div = document.createElement("header");
    getInfo().then(info=>{
        
        let {name, summary} = info.data;
       
        const title = document.createElement("h1");
        title.innerHTML = name;
    
        const about = document.createElement("p");
        about.innerHTML = summary;
    
        div.append(title,about);
        
    });
    return div;
}

export default Header;