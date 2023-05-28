import React, { useEffect, useState } from 'react';

const useMenuData = () => {
    const [menudata,setMenudata] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>setMenudata(data))
    },[])
    return menudata
};

export default useMenuData;