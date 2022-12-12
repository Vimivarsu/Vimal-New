import React from 'react'
import './FilterPage.css'

export default function FilterPage() {
  return (
    <div>
    <img id="background" src='https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6' alt='Background'></img>
     <h1 className='filter'>Filter</h1>
     <h4 className='Look'>Looking to:</h4>
     <button type={"button"} value={"button"} id="buy">Buy</button>
     <button type={"button"} value={"button"} id="sell">Sell</button>
     <h4 className='Pro'>Property Type :</h4>
     <button type={"button"} value={"button"} id="p1">House</button>
     <button type={"button"} value={"button"} id="p2">Apartment</button>
     <button type={"button"} value={"button"} id="p3">Villas</button>
     <button type={"button"} value={"button"} id="p4">Room</button>
     <h4 className='Price'>Pricing:</h4>
     <input type={"range"} min="2K" max="15K" id="pri" />
     0 <input type="range" min="0" max="255" name="sld2" value="47"> 255
     <h4 className='BedRoom'>BedRooms :</h4>
     <button type={"button"} value={"button"} id="be1">1 BHK</button>
     <button type={"button"} value={"button"} id="be2">2 BHK</button>
     <button type={"button"} value={"button"} id="be3">3 BHK</button>
     <button type={"button"} value={"button"} id="be4">>3 BHK</button>
     <button type={"button"} value={"button"} id="reset">Reset</button>
    </div>
  )
}
