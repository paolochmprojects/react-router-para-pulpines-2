import { useLoaderData, redirect} from "react-router-dom"

const userAuht = true

export async function loader() {
    if (!userAuht) return redirect("/help")

    console.log("Habla pe causita")
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data
}

function HomePage() {
    console.log("Rederice HomePage")

    const { info, results } = useLoaderData()

    return <>
        <h1 className="bg-green-600">HomePage</h1>
        <div>
            {results.map(charc=>{
                return <div key={charc.id}>
                    <img src={charc.image} />
                </div>
            })}
        </div>
    </>
}

export default HomePage