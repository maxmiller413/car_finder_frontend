import React, { useState } from "react"

function Filter({ 
    type, 
    setType,
    make,
    setMake,
    model,
    setModel,
    maxPrice,
    setMaxPrice,
    avgVehicleRating,
    setAvgVehicleRating
}) {
    
    return(
        <div className="bg-img">
            <div className="content">
                <header>Vehicle Filters</header>
                <div className="text-left">
                <label className="white">Type</label><br></br>
                <select
                    name="vehicle_type"
                    id="vehicle_type"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    <option value="All" > All </option>
                    <option value="Convertible" > Convertible </option>
                    <option value="Sedan" > Sedan </option>
                    <option value="SUV" > SUV </option>
                    <option value="Coupe" > Coupe </option>
                    
                </select><br></br><br></br>

                <label className="white">Make</label><br></br>
                <select
                    name="make"
                    id="make"
                    value={make}
                    onChange={(event) => setMake(event.target.value)}
                >
                    <option value="All" > All </option>
                    <option value="Audi" > Audi </option>
                    <option value="BMW" > BMW </option>
                    <option value="Mercedes-Benz" > Mercedes-Benz </option>
                    <option value="Porsche" > Porsche </option>
                    <option value="Infiniti" > Infiniti </option>
                    <option value="Volvo" > Volvo </option>
                    <option value="Bentley" > Bentley </option>
                    <option value="Jaguar" > Jaguar </option>
                </select><br></br><br></br>
                
                <label className="white">Model</label><br></br>
                <select
                    name="make"
                    id="make"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                >
                    <option value="All" > All </option>
                    <option value="A7" > A7 </option>
                    <option value="RS 7" > RS 7 </option>
                    <option value="RS Q8" > RS Q8 </option>
                    <option value="R8" > R8 </option>
                    <option value="Q3" > Q3 </option>
                    <option value="G-Class" > G-Class </option>
                    <option value="S-Class" > S-Class </option>
                    <option value="E-Class" > E-Class </option>
                    <option value="GLS" > GLS </option>
                    <option value="SL Roadster" > SL Roadster </option>
                    <option value="911" > 911 </option>
                    <option value="718" > 718 </option>
                    <option value="Panamera" > Panamera </option>
                    <option value="Macan" > Macan </option>
                    <option value="Cayenne" > Cayenne </option>
                    <option value="X7" > X7 </option>
                    <option value="Z4" > Z4 </option>
                    <option value="X2" > X2 </option>
                    <option value="8 series" > 8 series </option>
                    <option value="7 series" > 7 series </option>

                    <option value="Q50" > Q50 </option>
                    <option value="QX50" > QX50 </option>
                    <option value="Q60" > Q60 </option>
                    <option value="XC90 T8" > XC90 T8 </option>
                    <option value="Bentayga" > Bentayga </option>
                    <option value="Continental GT" > Continental GT </option>
                    <option value="Mulsanne" > Mulsanne </option>
                    <option value="X6" > X6 </option>
                    <option value="GLE Coupe" > GLE Coupe </option>
                    <option value="F Pace" > F Pace </option>
                    </select><br></br><br></br>
                    <label className="white">Max Price</label><br></br>
                    <select
                        name="max price"
                        id="max price"
                        value={maxPrice}
                        onChange={(event) => setMaxPrice(event.target.value)}
                    >
                        <option value="No Max Price" > No Max Price </option>
                        <option value="2000" > 2000 </option>
                        <option value="4000" > 4000 </option>
                        <option value="6000" > 6000 </option>
                        <option value="8000" > 8000 </option>
                        <option value="10000" > 10000 </option>
                        <option value="15000" > 15000 </option>
                        <option value="20000" > 20000 </option>
                        <option value="25000" > 25000 </option>
                        <option value="30000" > 30000 </option>
                        <option value="35000" > 35000 </option>
                        <option value="40000" > 40000 </option>
                        <option value="45000" > 45000 </option>
                        <option value="50000" > 50000 </option>
                        <option value="60000" > 60000 </option>
                        <option value="70000" > 70000 </option>
                        <option value="80000" > 80000 </option>
                        <option value="90000" > 90000 </option>
                        <option value="100000" > 100000 </option>
                        <option value="110000" > 110000 </option>
                        <option value="120000" > 120000 </option>
                        <option value="130000" > 130000 </option>
                        <option value="140000" > 140000 </option>
                        <option value="150000" > 150000 </option>

                    </select><br></br><br></br>
                    <label className="white">Average Vehicle Rating</label><br></br>
                    <select
                        name="average-vehicle-rating"
                        id="average-vehicle-rating"
                        value={avgVehicleRating}
                        onChange={(event) => setAvgVehicleRating(event.target.value)}
                    >
                        <option value="All" > All </option>
                        <option value="1" > 1 </option>
                        <option value="2" > 2 </option>
                        <option value="3" > 3 </option>
                        <option value="4" > 4 </option>
                        <option value="5" > 5 </option>
                    </select>
                </div>
            </div>
        </div>
    )
}


export default Filter