import { useState, useEffect } from "react"
export default function Test() {
    const [value, setValue] = useState('')
    async function Test() {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json()
        setValue(data[0].title)
    };
    useEffect(()=>{
        Test()
    },[]);
    return (
        <div>
            <h2>123{value}</h2>
        </div>
    )
}