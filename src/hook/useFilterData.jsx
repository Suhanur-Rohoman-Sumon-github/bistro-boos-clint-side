import React, { useEffect, useState } from 'react';
import useMenuData from './useMenuData';

const useFilterData = (catagory) => {
   const menuData = useMenuData()
   const [filterdatas,setFilterdatas] = useState([])
   useEffect(()=>{
    const filterdata = menuData.filter(menu=>menu.category === catagory)
    setFilterdatas(filterdata)
   },[menuData])
   return filterdatas
};

export default useFilterData;