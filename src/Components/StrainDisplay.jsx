import { useEffect, useState } from "react";
import { getStrains } from "../../api/fetch";
import { Link } from "react-router-dom";
import "./StrainDisplay.css"


const StrainDisplay = ({setStrain, strain}) => {
  const [strains, setStrains] = useState([])
    

    const handleAddToCart= () => {
        console.log(`I am added.`)
    }

    const handleSetStrain= (e) => {
        setStrain(e)
    }

    useEffect(() => {
        getStrains().then(data => {
            setStrains(data)
        })
    }, [])

    // console.log(strains)
    return (
        <div className="main-strain-display">
        <ul>
            {strains.map((strain) => {
                
                return (
                    <Link onClick={() => handleSetStrain(strain)} to={`/${strain.name}`} key={strain.id} >
                    <li key={strain.id} >
                    <h1>{strain.name}</h1>
                    <img src={strain.image} alt='' style={{border: "1px solid black", height: "100px", width: "100px"}}/>
                    <p>Price: {strain.pricePerGram}</p>
                    <p>Rating: {strain.rating}</p>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                    </li>
                    </Link>
                )
            })}
        </ul>
        </div>
    );
}

export default StrainDisplay
