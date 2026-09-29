import { useEffect, useState } from "react"
import axios from 'axios'

function Hairdryer({url}){
    const serverURL = url
    const [hairdryer, setHairdryer] = useState([])

    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [power, setPower] = useState(0)
    const [voltage, setVoltage] = useState(0)
    const [manufacturedIn, setManufacturedIn] = useState(2000)

    async function LoadHairdryer() {
        try {
            const response = await axios.get(serverURL + '/hairdryer')
            setHairdryer(response.data)
        }
        catch (error) {
            console.log(error);
            alert('Sikertelen listázás: hajszárító')
        }
    }

    async function CreateHairdryer(){
        try {
            const response = await axios.post(serverURL+"/hairdryer",{
                make, model, power, voltage, manufacturedIn
            })
            LoadHairdryer()
        } catch (error) {
            console.log(error);
            alert("sikertelen hajszárító létrehozás")
        }
    }

    useEffect(() => {
        LoadHairdryer()
    }, [])


    return <>
        <section>
            <h2>Hajszárítók</h2>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Gyártó</th>
                        <th>Típus</th>
                        <th>Teljesítmény</th>
                        <th>Üzemi feszültség</th>
                        <th>Gyártási év</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody>
                    {hairdryer.map((oneHairdryer) => <tr key={oneHairdryer.id}>
                        <td>{oneHairdryer.make}</td>
                        <td>{oneHairdryer.model}</td>
                        <td>{oneHairdryer.power}</td>
                        <td>{oneHairdryer.voltage}</td>
                        <td>{oneHairdryer.manufacturedIn}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => DeleteHairdryer(oneHairdryer.id)} >
                                X
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </section>
        <section>
            <h2>Hajszárító létrehozás</h2>
            <input type="text" className="form-control mb-2" placeholder="Gyártó" value={make} onChange={(e) => setMake(e.target.value)}/>
            <input type="text" className="form-control mb-2" placeholder="Típus" value={model}  onChange={(e) => setModel(e.target.value)}/>
            <input type="number" className="form-control mb-2" placeholder="Teljesítmény" value={power} onChange={(e) => setPower(e.target.value)} />
            <input type="number" className="form-control mb-2" placeholder="Üzemi feszültség" value={voltage} onChange={(e) => setVoltage(e.target.value)} />
            <input type="number" className="form-control mb-2" placeholder="Gyártási év" value={manufacturedIn} onChange={(e) => setManufacturedIn(e.target.value)}/>
          
            <button onClick={CreateHairdryer} className="btn btn-primary mb-2">Létrehozás</button>
        </section>
    </>
}

export default Hairdryer