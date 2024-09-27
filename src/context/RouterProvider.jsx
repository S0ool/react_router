import {useEffect, useRef, useState} from "react";

export const RouterProvider = ({router})=>{
    const ref = useRef(window.location.pathname)
    const [Element,setElement] = useState(<></>)

    useEffect(()=>{
        let {element} = router.find(({path})=>path == ref.current)
        setElement(element)
    },[])
    return(
        <>
            {Element == null ? "loading" : Element}
        </>
    )
}