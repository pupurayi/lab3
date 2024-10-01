import React, { useState } from "react";
import '../App.css'


function Greeting(){
    const [name, setName] = useState('');
    const handleChange = (event)=>{
        setName(event.target.value)
    };

    return(
    <div >
        {/* a form to implement user to enter their name */}
        <h1 class="mt-8 text-l text-blue-900 font-bold" >Good day to you , {name ? name : 'Sir'} 😇</h1>
        <form class="max-w-sm mx-auto">
            <label class="block text-sm pt-8 font-medium text-gray-900 dark:text-white">
                Enter your name :
                <input
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-lg focus:border-blue-500 block w-full "
                type="text"
                value={name}
                onChange={handleChange}
                />
            </label>
        </form>
    </div>)
}
export default Greeting