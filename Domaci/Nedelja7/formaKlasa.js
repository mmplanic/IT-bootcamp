import React, { Component } from 'react'

export default class Forma extends Component{
    render(){
        return(<form>
            <input type="text" placeholder="Klasa"/>
            <button>{this.props.text}</button>
            </form>);
    }
}