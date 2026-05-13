import { useParams } from "react-router-dom"

export function EditProduct(){
    const {id} = useParams();
    
    return(
    <>
        <h1>Editar produto</h1>
        <span>{id}</span>
    </>
    )
}