import { Form, useActionData, useFetcher } from "react-router-dom"

export async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
   
    try {
        const response = await fetch("url",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.ok){
            const dataFromAPI = await response.json()
            return ["success", dataFromAPI]
        } else {
            return ["error", new Error("Upps tu peticion no se pudo ser procesar")]
        }
    } catch (err){
        return err
    }

}

function HelpPage() {

    const err = useActionData()
    const fetcher = useFetcher()

    const data = fetcher.data

    return <>
        <h2 className="bg-red-600">Help page</h2>
        {err && <p className="text-red-500">{err.message}</p>}

        {data && <h1>Hola {data.name}</h1>}
        <fetcher.Form action="/register" method="post">
            <input type="text" name="name"/>
            <button className="bg-gray-300 rounded-lg p-4">Enviar</button>
        </fetcher.Form>

    </>
}

export default HelpPage