import '../style/Catitem.css'

interface CatProps {
    nom: string;
    occupation: string;
    photo: string;
    recherche: string;
}

export default function Catitem({ nom, occupation, photo, recherche }: CatProps) {

    return (
        <>
            <div>
                <img src={photo} alt="" />
                <p>{nom}, {occupation}, recherche {recherche}</p>
            </div>
        </>
    )
}