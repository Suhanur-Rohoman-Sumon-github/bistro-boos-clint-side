import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Authcontext } from '../provider/AuthProvider';

const useCarts = () => {
    const {user,loading} = useContext(Authcontext)
    const token = localStorage.getItem('access-token')
    const { data,refetch } = useQuery({
       queryKey : ['carts',user?.email],
       enabled:!loading,
       queryFn: async () => {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
          headers:{
            authorization:`bearar ${token}`
          }
        })
        return res.json()
      },
      })
      return [data,refetch]
     
};

export default useCarts;