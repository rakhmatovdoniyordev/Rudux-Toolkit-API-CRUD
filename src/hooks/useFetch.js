import { useEffect, useState } from "react";
import axios from "../api";

export const useFetch = (path, params={}, deps=[]) => {
    const [data, setData] = useState(null)
    useEffect(()=> {
        axios.
            get(path, {
                params
            })
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [...deps])
    return {data}
}