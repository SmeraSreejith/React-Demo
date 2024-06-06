
import './App.css';
import myStyle from '../src/myStyle.module.css';
import Random from './Random';
import Example from './Example';

import User from './User';
import Register from './Register';

function App() {

  //js code
  const h1style ={color:'green',fontSize:'70px',backgroundColor:'yellow'}
   const subject ='REACT.js'
   const username ='Maxwell'

  return (
    //html code
    <>

      <div >
        <h1 style={h1style}>My first React Application ......</h1>
        <h2>Demo</h2>
        <p className={myStyle.reactStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut neque itaque aspernatur suscipit. Praesentium voluptatum voluptas doloremque. Enim excepturi incidunt dicta voluptas, ex voluptatibus saepe eum cumque officiis aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officiis molestiae totam veniam dignissimos laborum iure beatae deserunt consectetur. Illo rem, laudantium ea autem maiores nesciunt reprehenderit suscipit voluptate amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iste alias vero quam provident quasi blanditiis ducimus dignissimos veniam molestiae, aut ad quaerat. Ea praesentium accusamus ab itaque accusantium eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deserunt quam architecto consectetur, aperiam obcaecati fugiat illo temporibus velit, voluptatibus exercitationem sed placeat consequatur, natus id odio dicta vel nam.</p>
      </div>

      <h3>My Subject is :{subject}</h3>
      <h3>Username is: {username}</h3>
      <h1 className={[myStyle.style2,myStyle.style3].join(' ')}>Components
      </h1>

      <ul>
        <li><Random uname={username}/></li>
        <li><Example sub={subject} age={28}/></li>
        <li><User /></li>
      </ul>
      <Register/>

    </>
   );
  }
  

export default App;
