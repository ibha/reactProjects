import React, { useState,useEffect } from 'react';

export function CounterApp() {
    const [counter,setCounter] = useState(0);
    const [title,setTitle] = useState('My App');

    useEffect(() => {
        console.log("useEffect");
        document.getElementById("countDiv").innerHTML = "This is " + counter;
        return function cleanUp() {
            console.log("Removeddd")
        }    
    },[counter])

    useEffect(() =>{
        console.log("useEffecttitle");
        document.title = title;
    },[title])

    var increment = () => {
        console.log("inc ",counter);
        setCounter(()=>counter+1);
         
    }
    var decrement = () => {
        console.log("dec ",counter);
        setCounter(()=>counter-1);
    }

    let updateTitle = () => {
        document.title=title;
    }

    let handleChange = (event) => {
        setTitle(event.target.value)
    }

    return(
        <React.Fragment>
            <div>
                <form onSubmit={updateTitle}>
                    <label htmlFor="title">Add title</label>
                    <input id="title" 
                        type="text" 
                        value={title}
                        onChange={handleChange}
                    />
                    <input type="submit" title="Update"></input>
                </form>
            </div>
            <div>
                <button onClick={increment}>Add</button>
                <button onClick={decrement}>Subtract</button>
                <div id="countDiv"></div>
                <div id="testDiv"></div>
            </div>
        </React.Fragment>
    );

}