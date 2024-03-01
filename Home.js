import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>welcome to training - {props.name} {props.age} </h1>
           <p> {props.obj.department}- {props.obj.college} </p> 
           {props.Arr.map((data)=> {return(<li>{data}</li>)})}
           {props.jsx}

        </div>
    );
}

export default Home;