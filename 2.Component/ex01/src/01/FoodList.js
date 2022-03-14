import React,{Component} from "react";
import FoodlistItem from "./FoodListItem";

export default class Foodlist extends Component{

    render(){
        return (
            <ul>
                <FoodlistItem name="Egg" quantity="20"/>
                <FoodlistItem name="Milk" quantity="5"/>
                <FoodlistItem name="Bread" quantity="10"/>
            </ul>

        );
    }
};