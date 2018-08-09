import React from 'react';


//functional component
//custom component should be Capitalized
//Lowercase are built in components
//props = used as function argument
const Intro = (props) => (
    <p className="App-intro">
      {props.message}
    </p>
)

export default Intro