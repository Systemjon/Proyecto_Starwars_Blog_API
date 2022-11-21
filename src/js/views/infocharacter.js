import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Information } from "../component/information";
const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p";


export const InfoCharacter = ()=> {

    const [character, setCharacter] = useState([])
    const params = useParams()
    const API_URL= "https://www.swapi.tech/api/"
    async function getCharacter (id) {
        const response = await fetch(API_URL + `people/${id}`)
        if (!response.ok) {
            alert("Error en la solicitud")
        }
        const body = await response.json ()
        setCharacter(body.result.properties)
    };
    useEffect(()=> getCharacter(params.id), []);
    return (
        <div>
            <div className="d-flex">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="m-4"
                alt="..." />
                <div className="mx-4 justify-content-center">
                    <h1 className="text-primary my-3">{character.name}</h1>
                    <p className="text-primary fs-5">{Lorem} </p>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-4 mx-3 pt-4 border-top border-2 border-danger">
                <Information name="Name" data={character.name}/>
                <Information name="Birth Year" data={character.birth_year}/>
                <Information name="Gender" data={character.gender}/>
                <Information name="Height" data={character.height} />
                <Information name="Skin Color" data={character.skin_color}/>
                <Information name="Eye Color" data={character.eye_color}/>
            </div>
        </div>
    )
}






