import React, { useContext } from 'react';
import { Authcontext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useCarts from '../../hook/useCarts';
// TODO : use from to current loacation this is baki
const SingleTabData = ({ item }) => {
    const { name, recipe, image, price, _id } = item
    const [,refetch] = useCarts()
    const { user } = useContext(Authcontext)
    const navigat = useNavigate()
    const handleAddCart = (item) => {
        const cartItem = { menuItemId: _id, name, image, price, email: user?.email }
        if (user) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'products added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login firest to add card',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
              }).then((result) => {
                if (result.isConfirmed) {
                navigat('/login')
                }
              })
        }
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddCart(item)} className='btn btn-warning btn-outline border-0 border-b-2'>Add to cart</button>
                </div>

            </div>
        </div>
    );
};

export default SingleTabData;