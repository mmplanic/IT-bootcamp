import LaunchList from "./components/launch_list";
import Header from "./components/header";

const app=document.querySelector('#app');

const header = Header();

let launch_list_and_filter = LaunchList();

const footer=document.createElement('footer');
footer.innerHTML = "<h3>Design by IT Bootcamp</h3>";


app.append(header,launch_list_and_filter,footer);

