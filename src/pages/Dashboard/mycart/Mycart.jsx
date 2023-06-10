import React from 'react';
import useCarts from '../../../hook/useCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import TextHeader from '../../../componnents/textHeader/TextHeaders';

const Mycart = () => {
    const [data,refetch] = useCarts()
    if (!Array.isArray(data)) {
        // Handle the case when data is still being fetched or is not an array
        return <div className='flex justify-center items-center mt-[30%]'><progress className="progress w-56"></progress>.</div>
    }
    const price = data.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className='bg-slate-100 '>
                        <TextHeader subHeader='---My Cart---' header='WANNA ADD MORE?'></TextHeader>
                    </div>
            <div className='flex items-center justify-between py-4'>
                <h1 className='text-4xl font-bold'>Total orders:{data.length}</h1>
                <h1 className='text-4xl font-bold'>total price : ${price}</h1>
                <button className='btn btn-warning'>pay now</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mycart;