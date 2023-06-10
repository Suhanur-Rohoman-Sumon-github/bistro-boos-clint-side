import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TextHeader from '../../../../componnents/textHeader/TextHeaders';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const handleDelete = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }
    const handleAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }
    return (

        <div>
            <div className=' bg-slate-100'>
                <TextHeader header='MANAGE ALL USERS' subHeader='---How many??---'></TextHeader>
            </div>
            <h1 className='text-4xl font-bold '> total  users {users.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>user name</th>
                            <th>user email</th>
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {user.names}
                                </td>

                                <td className="text">{user.emails}</td>
                                <td>
                                    {user.rule === 'admin' ? 'admin' : <button onClick={() => handleAdmin(user._id)} className="btn btn-ghost bg-[#D1A054]  text-white"><FaUsers /></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;