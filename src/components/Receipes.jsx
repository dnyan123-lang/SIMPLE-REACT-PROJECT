import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Receipes = () => {
    const [receipes, setReceipes] = useState([])

    async function fetchData() {
        const res = await axios.get('https://dummyjson.com/recipes?limit=10')
        setReceipes(res.data.recipes)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="app-container">
            <h1 className="page-title">My Recipe Book</h1>
            
            <div className="recipe-list">
                {receipes.map((rec, i) => (
                    <div className="custom-recipe-card" key={i}>
                        {/* LEFT SIDE: Image */}
                        <img src={rec.image} className="recipe-image" alt={rec.name} />
                        
                        {/* RIGHT SIDE: Information */}
                        <div className="recipe-info">
                            <h2 className="recipe-title">{rec.name}</h2>
                            
                            <div className="recipe-text-columns">
                                <div className="ingredients-col">
                                    <h3>Ingredients</h3>
                                    <ul>
                                        {rec.ingredients.map((ing, index) => (
                                            <li key={index}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="instructions-col">
                                    <h3>Instructions</h3>
                                    <ol>
                                        {rec.instructions.map((ins, index) => (
                                            <li key={index}>{ins}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Receipes