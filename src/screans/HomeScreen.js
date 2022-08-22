import React, {useEffect, useState} from 'react'

export default function HomeScreen() {
    const [countries, setCountries]= useState([]);
    const [Isspending, setIsspending] = useState(false)
    useEffect(() =>{
        setIsspending(true)
        fetch("https://restcomtries.com/v3.1/all")
        .then ((res) => res.json())
        .then ((date) =>{
            setCountries();
        })
        .cat((err)=>console.log("error: ",err))
        .finally (()=>{});
        setIsspending(false)
    }, []);
    if (Isspending)return <h1> Loading....</h1>
  return (
    <div>{countries.map((country) =>(
    <div className="card">
        <img src={country.flag.png} alt={country.name.common}/>
        <h5> country.name.commmon</h5>
    </div>    
    ))}
    </div>
  )
}
