import axios from "axios"
import { useEffect, useState } from "react"


function CreateLetter(props) {
    const [recommender, setRecommender] = useState('')
    const [recommended, setRecommended] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    function validateData() {
        setError(null)

        if (recommender.length == '') {
            setError('El recomendador no puede quedar vacío')
            return false
        }

        if (recommended.length == '') {
            setError('El recomendado no puede quedar vacío')
            return false
        }

        if (body.length == '') {
            setError('El body no puede quedar vacío')
            return false
        }

        return {
            recommender, recommended, body
        }
    }

    async function callCreateLetter() {
        setLoading(True)
        const data = validateData()
        if (data) {
            response = await axios.post('', data)
            
            if (response.status == 200) {
                // success
            }
        }

        setLoading(False)
    }

    return (
        <div className="flex justify-center py-4">
            <div className="w-96">
                <div className="bg-white shadow-md p-2 rounded-lg flex flex-col items-center">
                    <h1 className="pb-2 text-lg font-bold pt-1">Crear carta</h1>

                    {
                        error && (
                            <div className="bg-red-500 w-full rounded m-2 px-2 text-white">
                                {error}
                            </div>
                        )
                    }

                    <input className="p-2 w-full mb-2 rounded border" type="text" name="recommender" placeholder="Nombre recomendador"
                        onChange={e => setRecommender(e.target.value)}></input>
                    <input className="p-2 w-full mb-2 rounded border" type="text" name="recommended" placeholder="Nombre recomendado"
                        onChange={e => setRecommended(e.target.value)}></input>
                    <textarea className="p-2 w-full mb-2 rounded h-40 border" name="body" type="text" placeholder="Cuerpo de la carta"
                        onChange={e => setBody(e.target.value)}></textarea>

                    {
                        loading ? <p> Cargando.. </p> : (
                            <button className="p-2 bg-blue-900 text-white w-full mt-3 rounded"
                                onClick={e => callCreateLetter()}>Guardar</button>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default CreateLetter
