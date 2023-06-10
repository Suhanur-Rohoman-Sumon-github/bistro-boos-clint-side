import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecqure"
import useAuth from "./useAuth"

const useAdmin = () =>{
    const {user} = useAuth()
const [axiosSecure] = useAxiosSecure()
const {data:isAdmin,isLoading:loading} = useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        console.log('isAdmin resposnse ',res)
        return res.data.admin
    } 
      
})
return [isAdmin,loading] 
}
export default useAdmin