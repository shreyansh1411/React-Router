import React, { useState } from 'react';
import { GetAPIDetails ,DeleteAPIDetails } from './API';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetAPIAction , DeleteAPIAction } from '../Action';
import Home from './Home';
import { Link } from 'react-router-dom';


function Showdata(props) {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.reducer.details);
    const isDelete = useSelector((stae)=>stae.reducer.isDelete)


    useEffect(()=>{
        dispatch(GetAPIAction())
    },dispatch)
    console.log(result);
    if(isDelete){
        window.location.reload(false)
    }

    const Resultdata = result?result.map((res)=>{
        return<>
             <tr>
                                        <td>{res.id}</td>
                                        <td>{res.name}</td>
                                        <td>{res.email}</td>
                                        <td>{res.phone}</td>
                                        <td>{res.country}</td>
                                        <td><button className='btn btn-danger'
                                        onClick={()=>dispatch(DeleteAPIAction(res.id))}>Delete</button>/
                                        <Link to={`/update/${res.id}`} className='btn btn-success'>Update</Link></td>
                                    </tr>
        </>
    }):null
    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <center><h1 className='text-success'>Welcome To Redux CRUD Application</h1></center>
                <div className="col mt-5">
                    <table className='table text-center text-danger'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Action</th>
                        <tbody>
                           
                           {Resultdata} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       </>
    );
}

export default Showdata;