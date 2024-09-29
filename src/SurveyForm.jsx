import { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // For green tick and red cross icons
import Navbar1 from './Components/Navbar1';

function SurveyForm() {
  const [meal, setMeal] = useState('');
  const [activity, setActivity] = useState('');
  const [age, setAge] = useState('');
  const [body, setBody] = useState('');
  const [showDiet, setShowDiet] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [diet,setDiet] = useState(false)

  const handleSubmit = () => {
    // Validation: Check if all fields are filled
    if (!meal || !activity || !age || !body) {
      setErrorMessage('Please fill out all the fields.');
      setSuccessMessage(false);
    } else {
      setErrorMessage('');
      setSuccessMessage(true); // Show success message
      // Hide the form after submission
    }
  };

  const handleShowDiet = () => {
    setShowDiet(true);
    setDiet(true);
  };

  return (
    <>
    <Navbar1/>
      <div className="px-[250px] py-8">
        {/* Conditionally render form only if successMessage is false */}
        {!successMessage ? (
          <div className="h-[700px] w-[850px] bg-gray-200 border border-black">
            <div className="px-48 py-3">
              <p className="text-4xl font-mono font-thin">Diet Plan Survey Form</p>
            </div>
            <div className="flex py-2">
              <div className="py-2 px-4">
                {/* This is question one */}
                <div>
                  <p className="text-2xl font-semibold">1. What's your meal preference?</p>
                </div>
                <div className="py-2">
                  <select className="w-96 py-1 rounded-lg" value={meal} onChange={(e) => setMeal(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value ='Non-Vegetarian'>Non-Vegetarian</option>
                    
                  </select>
                </div>
              </div>

              {/* This is question two */}
              <div className="py-2 px-4">
                <div>
                  <p className="text-2xl font-semibold">2. What's your Favourite-Meal?</p>
                </div>
                <div className="py-2">
                  <select className="w-96 py-1 rounded-lg" value={activity} onChange={(e) => setActivity(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Boul-Rice">Boild-Rice</option>
                   

                  </select>
                </div>
              </div>
            </div>

            {/* This is question three */}
            <div className="flex py-2">
              <div className="py-2 px-4">
                <div>
                  <p className="text-2xl font-semibold">3. What's your Age?</p>
                </div>
                <div className="py-2">
                  <select className="w-96 py-1 rounded-lg" value={age} onChange={(e) => setAge(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="20-25">20-25</option>
                    <option value = '25-35'>25-35</option>
                  </select>
                </div>
              </div>

              {/* This is question four */}
              <div className="py-2 px-4">
                <div>
                  <p className="text-2xl font-semibold">4. What do you achive?</p>
                </div>
                <div className="py-2">
                  <select className="w-96 py-1 rounded-lg" value={body} onChange={(e) => setBody(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Increase-Weight">IncreaseWeight</option>
                    <option value="Decrease-Weight">Decrease-Weight</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="px-64 py-3">
              <button onClick={handleSubmit} className="bg-white text-black px-32 py-1 rounded-xl font-semibold">
                Submit
              </button>
            </div>

            {/* Show error message */}
            <div className="px-44 py-4">
              {errorMessage && (
                <div className="flex items-center text-red-600 font-semibold">
                  <FaExclamationCircle className="mr-2" />
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        ) : (
          // Show success message in big text when form is submitted
          <div className="flex flex-col ">
            <div className="flex items-center text-green-600 text-4xl font-bold">
              <FaCheckCircle className="mr-4" />
              Your survey is successfully submitted!
            </div>
            <button
              className="mt-8 bg-blue-500 text-white px-32 py-3 rounded-xl font-semibold"
              onClick={handleShowDiet}
            >
              Show Diet Recommendation
            </button>
            {/* Show diet recommendation based on the form values */}
            <div className='py-3' />
            {showDiet && (
              <div className="px-18">
                <div className="bg-pink-200 h-40 w-[860px] rounded-xl">
                  <div className="px-6">
                    <p className="text-2xl font-extralight">Your diet recommendation chart</p>
                  </div>
                  {meal === 'vegetarian' && activity === 'Boul-Rice' && age === '20-25' && body === 'Increase-Weight' && (
                    <div className="px-3 py-3">
                        <ul className='px-3'>
                          <li>Bread</li>
                          <li>Boiled Rice</li>
                          <li>Milk</li>
                          <li>Boiled-Egg</li>
                        </ul>

                  
                    </div>
                  )}
                   {meal === 'vegetarian' && activity === 'Boul-Rice' && age ==='20-25' && body === 'Decrease-Weight' && (
                    <div className='px-4 py-3'>
                         <ul className='px-3'>
                          <li>Multi-Grain Bread</li>
                          <li>Boiled Rice</li>
                          <li>Curd-With Rice</li>
                          <li>Fatty-Fish</li>
                        </ul>

                      </div>
                      )}
                      {meal === 'vegetarian' && activity === 'Boul-Rice' && age === '25-35' && body === 'Decrease-Weight'&&(
                        <div className='px-4 py-3'>
                        <ul className='px-3'>
                          <li>Bread-With Milk</li>
                          <li>Fresh-Fruit</li>
                          <li>Dry-Fruits</li>
                          <li>Apple</li>
                        </ul>

                        </div>
                      ) }
                       {meal === 'vegetarian' && activity === 'Boul-Rice' && age === '25-35' && body === 'Increase-Weight'&&(
                        <div className='px-4 py-3'>
                           <ul className='px-3'>
                          <li>Boiled-Rice</li>
                          <li>Whole-Grain Pasta</li>
                          <li>Dark-Chocolate</li>
                          <li>Peanut-Butter</li>
                        </ul>

                          </div>
                      ) }

                       {meal === 'Non-Vegetarian' && activity === 'Boul-Rice' && age === '20-25' && body === 'Increase-Weight'&&(
                        <div className='px-4 py-3'>
                            <ul className='px-3'>
                          <li>Bread</li>
                          <li>Boiled Rice</li>
                          <li>Milk</li>
                          <li>Boiled-Egg</li>
                        </ul>

                        </div>
                      ) }
                       {meal === 'Non-Vegetarian' && activity === 'Boul-Rice' && age === '20-25' && body === 'Decrease-Weight'&&(
                        <div className='px-4 py-3'>
                           <ul className='px-3'>
                          <li>Fatty-Fish</li>
                          <li>Boiled Rice</li>
                          <li>Whole-Grain Pasta</li>
                          <li>Boiled-Egg</li>
                        </ul>
                          </div>
                      ) }
                         {meal === 'Non-Vegetarian' && activity === 'Boul-Rice' && age === '25-35' && body === 'Decrease-Weight'&&(
                        <div className='px-4 py-3'>
                            <ul className='px-3'>
                          <li>Bread-Butter</li>
                          <li>Soya </li>
                          <li>Cow-Milk Cheese</li>
                          <li>Boiled-Egg</li>
                        </ul>

                          </div>
                      ) }
                         {meal === 'Non-Vegetarian' && activity === 'Boul-Rice' && age === '25-35' && body === 'Increase-Weight'&&(
                        <div className='px-4 py-3'>
                           <ul className='px-3'>
                          <li>Bread</li>
                          <li>Boiled Rice</li>
                          <li>Milk</li>
                          <li>Boiled-Egg</li>
                        </ul>
                          </div>
                      ) }
                  {meal === '' && activity === '' && age === '' && body === '' && (
                    <p className="font-mono px-4 py-2">Please choose options</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>


    </>
  );
}

export default SurveyForm;