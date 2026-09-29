import { useEffect, useState } from "react"
import axios from 'axios'

function Heater({url}){
    const serverURL = url
    const [heater, setHeater] = useState([])

    async function LoadHeater() {
        try {
            const response = await axios.get(serverURL + '/heater')
            setHeater(response.data)
        }
        catch (error) {
            console.log(error);
            alert('Sikertelen listázás: fűtők')
        }
    }

    useEffect(() => {
        LoadHeater()
    }, [])

    return <>
        <section>
            <h2>Melegítők</h2>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Gyártó</th>
                        <th>Típus</th>
                        <th>Magasság</th>
                        <th>Szélesség</th>
                        <th>Súly</th>
                        <th>Gyártási dátum</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody>
                    {heater.map((oneHeater) => <tr key={oneHeater.id}>
                        <td>{oneHeater.make}</td>
                        <td>{oneHeater.model}</td>
                        <td>{oneHeater.height}</td>
                        <td>{oneHeater.width}</td>
                        <td>{oneHeater.weight}</td>
                        <td>{oneHeater.madeIn}</td>
                        <td><button className='btn btn-danger' onClick={() => DeleteHeater(oneHeater.id)}>X</button></td>
                    </tr>)}
                </tbody>
            </table>
        </section>
        <section>
            <h2>Melegítő létrehozás</h2>

        </section>
    </>
}

export default Heater