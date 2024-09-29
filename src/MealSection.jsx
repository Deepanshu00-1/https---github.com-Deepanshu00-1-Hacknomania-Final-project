import MealCard from "./MealGenerate/MealCard";
import mealData from "./MealData/data";
import "./mealSection.css"
import SurveyForm from "./SurveyForm";
import Navbar1 from "./Components/Navbar1";

const DisplayMeal=(mealData)=>{
    return(
        <MealCard 
        mealName = {mealData.mealName}
        mealImage = {mealData.mealImage}
        mealDetail1 = {mealData.mealDetail1}
        mealDetail2 = {mealData.mealDetail2}
        mealDetail3 = {mealData.mealDetail3}
        mealDetail4 = {mealData.mealDetail4}
        mealDetail5 = {mealData.mealDetail5}
        />
    )
}

const MealSection=()=>{


    return(
        <>
        <Navbar1/>
        <div className="AllMeals">
        <h1>Here You Can View An Automated Meal and Select According To Your Preference</h1>
            {mealData.map(DisplayMeal)}
        </div>
        </>
    )
}
export default MealSection;