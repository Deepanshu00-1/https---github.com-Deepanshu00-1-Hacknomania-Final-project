import "./meal.css"
import { useState } from "react"

const MealCard=(props)=>{
    const [meal, setMeal] = useState(false);
    const nameClicked=()=>{
        setMeal(true);
    }
    return(
        <>
        <div className="meal-card" style={{backgroundImage: `url(${props.mealImage})`, marginLeft:'1vw'}}>
            <h2 onClick={nameClicked}>{props.mealName}</h2>
            <div className="detail" style={{visibility:meal?'visible':'hidden',}}>
                <ul>
                    <li>{props.mealDetail1}</li>
                    <li>{props.mealDetail2}</li>
                    <li>{props.mealDetail3}</li>
                    <li>{props.mealDetail4}</li>
                    <li>{props.mealDetail5}</li>
                </ul>
                <button>Add Meal</button>
            </div>
        </div>
        </>
    )
}
export default MealCard