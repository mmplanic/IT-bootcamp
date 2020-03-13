import React from 'react'

export default function Forma(props){
    return (<form>
        <input type="text" placeholder="Funkcija"/>
        <button>{props.text}</button>
        </form>);
}
