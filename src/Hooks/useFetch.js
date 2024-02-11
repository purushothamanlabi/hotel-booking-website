import {useState ,useEffect} from 'react'


const useFetch =(url) =>{
    const [data,setdata] = useState([])
    const [error,seterror] = useState(null)
    const [loading,setloading] = useState(false)

    useEffect(()=>{
        const fetchData = async () =>{
            setloading(true)

            try{
                const res =  await fetch(url)
                if (!res.ok) {
                    seterror('failed to featch')
                    
                }
                const result = await res.json()
                setdata(result.data)
            }
            catch(err){
                seterror(err.message)
                setloading(false)
            }
        }

        fetchData()

    },[url])

    return{
        data,
        error,
        loading
    }
}

export default useFetch