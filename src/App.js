import './App.css';
import { useState , useEffect } from 'react';


function App() {

    const [Data,setData] = useState(null);
    // const [Country,setCountry] = useState("");
    const [Type,setType] = useState(null);

  async function fetchData() {
    const res = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2");
    const response = await res.json();

    setData(response);
    setType(response.Results.VehicleTypes);

    // console.log(response.Results);
    // const [Country , Mfr_Name] = response.Results;
    // console.log(response.Results);
    // console.log(response.Results);

    // setData(JSON.stringify(response.Results));

    response.Results.forEach(data => {

      // console.log(data);
      console.log(data.Country);
      console.log(data.Mfr_Name);
      data.VehicleTypes.forEach(d => {
        if(d.IsPrimary){
          console.log(d.Name);
        }
      })

      
    })

    
  }

  useEffect(() =>{
    fetchData();
  },[])


  return (
    <div className="App">
        <h1>Vehicle Manufacturer Catalog </h1>
        <label>Search</label>
        <input id ="search" type="text" placeholder='Search Here'></input>

        <label>Select Vehicle Type</label>
        <select ><option>All</option>
        <option>Passenger Vehicle</option>
        <option>MPV</option>
        </select>

        <table id="table">
          <thead>
            <th>Name</th>
            <th>Country</th>
            <th>Type</th>
          </thead>
          <tbody>
            {Data?.Results?.map?.((data)=>{
              return(<tr>
                <td>{data.Mfr_Name}</td>
                <td>{data.Country}</td>
                <td>{data.Country.VehicleTypes?.Name}</td>
                </tr>)
            })}
          </tbody>
        </table>
    </div>
  );
}

export default App;
