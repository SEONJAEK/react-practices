import React,{Component} from "react";
import FoodlistItem from "./FoodListItem";


export default class Foodlist extends Component{

    render(){
        //const components =[ ];
        //this.props.forEach(function(food){
        //    components.push(<FoodlistItem name={food.name} quantity={food.quantity}/>);
        //});
        
        //const result = [1,2,3,4].map(function(e){
        //    return e*e;
        //})

        // const components = this.props.foods.map(function(food){
        //     return <FoodlistItem name={food.name} quantity={food.quantity}/>;
        // });
        

        return (
            <ul>
                {this.props.foods.map(food =>  <FoodlistItem 
                                                        name={food.name} 
                                                        quantity={food.quantity}/> )}
            </ul>
        );
    }
};