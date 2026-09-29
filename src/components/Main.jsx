import axios from 'axios'
import { useEffect, useState } from 'react'
import Hairdryer from './Hairdryer'
import Heater from './Heater'

function Main({ bg_color }) {
    const serverURL = "http://127.1.1.1:3000"

    return <main style={{ backgroundColor: bg_color }}>
        <Hairdryer url={serverURL} />
        <Heater url={serverURL}/>
    </main>
}

export default Main