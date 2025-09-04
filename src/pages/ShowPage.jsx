import { useEffect, useRef, useState } from "react";
import ShowCard from "../component/ShowCard";
import './showpage.css'
import getListing from "../controller/showController";

export default function ShowPage(){

      let alreadyFetched = false;
        let [listing, setListing] = useState([])
        const called = useRef(false)
        useEffect(() => {
            if (called.current) return // prevent double call
            called.current = true
        
            let fetch = async () => {
    
                let data = await getListing()
                setListing(data)
            }
            fetch()
    
        }, [])

    return (
        <div className="show-page">
            <ShowCard listing={listing}/>
        </div>
    )
}