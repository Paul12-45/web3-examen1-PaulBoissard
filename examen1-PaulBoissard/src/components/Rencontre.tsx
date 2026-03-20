import '../style/Rencontre.css'
import Catitem from './Catitem.tsx'
import { catList } from '../data/catList.ts'

export default function Rencontre() {

    return (

        <>
            <h1>Nos Membres</h1>
            {catList.map(cat =>
                <Catitem
                    key={cat.id}
                    photo={cat.photo}
                    nom={cat.nom}
                    occupation={cat.occupation}
                    recherche={cat.recherche}
                />
            )}
        </>
    )
}