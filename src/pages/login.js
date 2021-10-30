import { useState } from "react";


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    function validateData() {
        setError(null)

        if (email.length == '') {
            setError('El usuario no puede quedar vacío')
            return false
        }

        if (password.length == '') {
            setError('La contraseña no puede quedar vacío')
            return false
        }

        return {
            email, password
        }
    }

    async function auth() {
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
                    <h1 className="pb-6 text-lg font-bold pt-1">Login</h1>

                    {
                        error && (
                            <div className="bg-red-500 w-full rounded m-2 px-2 text-white">
                                {error}
                            </div>
                        )
                    }

                    <input className="p-2 w-full mb-2 rounded" type="text" name="email" placeholder="Email"
                        onChange={e => setEmail(e.target.value)}></input>

                    <input className="p-2 w-full rounded" type="password" name="password" placeholder="Contraseña"
                        onChange={e => setPassword(e.target.value)}></input>

                    {
                        loading ? <p> Cargando.. </p> : (
                            <button className="p-2 bg-blue-900 text-white w-full mt-3 rounded"
                                onClick={e => auth()}>Ingresar</button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Login;
