import React,{ useState } from 'react'

function User(){
    const [color, setColor] = useState({
        color1: 'RED',
        color2: 'GREEN',
        color3: 'YELLOW'
    })
    const [userDetails,setUserDetails]=useState([
        {username:'neel',age:'27',designation:'frontend Developer'},
        {username:'max',age:'20',designation:'Backend Developer'},
        {username:'nithin',age:'29',designation:'full stack Developer'},
        {username:'nivya',age:'30',designation:'HR'}
    ])
    console.log(color);
    const Change =(data)=>{
        setColor({...color,color3:data})
    }

 return(
    <>
     <div>User Component</div>

     <ul>
      <li>{color.color1}</li>
      <li>{color.color2}</li>
      <li>{color.color3}</li>    
     </ul>   
    <button className='btn btn-warning' onClick={()=>Change('BLUE')}>Change</button> 

    {/*TABLE*/}
    <table className='table w-50 rounded shadow table-border border-secondary mt-5'>
        <thead>
        <tr>
            <th className='p-3 bg-secondary'>SL NO </th>
            <th className='p-3 bg-secondary'>NAME</th>
            <th className='p-3 bg-secondary'>AGE</th>
            <th className='p-3 bg-secondary'>DESIGNATION</th>
        </tr>
        </thead>
        <tbody>
            {/*array.map((item)=>{}/(paranthesis in react)) */}
            {userDetails.map((item,index)=>(<tr>
                <td>{index+1}</td>
                <td>{item.username}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
            </tr>))}
        </tbody>
    </table>
    
    </>
 )
}
export default User