import React,{useState,useEffect} from 'react'
import './Covid.css'
function Covid() {

    const[info, setInfo] = useState([])
    const getCovidData = async() =>{
  try{
    const res = await fetch('https://api.covid19india.org/data.json')
    const data = await res.json();
    console.log(data.statewise[0]);
    setInfo(data.statewise[0]);

  }catch (err){
    console.log(err)
  }
    }

    useEffect(()=>{
   getCovidData()
    },[])

    return (
        <div className="covid">
            <h1>Covid-19 Tracker </h1>
            <h2>India</h2>
            <div className="covid__update">
               
                <div className="covid__case">
                    <h3>Recovered</h3>
                    <h2>{info.recovered}</h2>
                    </div>
                    <div className="covid__case">
                    <h3>Confirmed</h3>
                    <h2>{info.confirmed}</h2>
                    </div>
                    <div className="covid__case">
                    <h3>Deaths</h3>
                    <h2>{info.deaths}</h2>
                    </div>
                    <div className="covid__case">
                    <h3>Active</h3>
                    <h2>{info.active}</h2>
                    </div>
                    <div className="covid__case">
                    <h3>Update</h3>
                    <h2>{info.lastupdatedtime}</h2>
                    </div>
            </div>
        </div>
    )
}

export default Covid
