import React, { useEffect } from 'react';
import { useState } from 'react';
import { PostAPIAction } from '../Action/index'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GetDetails from '../Action/index'

function Update(props) {
    const dispatch = useDispatch();
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [country,setcountry]=useState('')

    const {id} = useParams()
    console.log("get data",id);
    const[getDetailsdata] = GetDetails(id)
    useEffect(()=>{
        const data=()=>{
            if(getDetailsdata.data)
            {
                setname(getDetailsdata.data.name)
                setemail(getDetailsdata.data.email)
                setphone(getDetailsdata.data.phone)
                setcountry(getDetailsdata.data.country)
            }
        }
        data();
    },[getDetailsdata])

    const NameHndl=(e)=>{
        setname(e.target.value);
    }

    
    const EmailHndl=(e)=>{
        setemail(e.target.value);
    }

    
    const PhoneHndl=(e)=>{
        setphone(e.target.value);
    }

    
    const CountryHndl=(e)=>{
        setcountry(e.target.value);
    }

    const Clickbtn=(e)=>{
        e.preventDefault();
        const Result={
            name:name,
            email:email,
            phone:phone,
            country:country,
        }
        dispatch(PostAPIAction(Result))
    }

    return (
       <>
       <div className="container">
        <table className='table'>
            <tr>
                <td>Name:</td>
                <td><input type="text" id='name' className='form-control' onChange={(e)=>NameHndl
                    (e)} defaultValue={name} /></td>
            </tr>

            <tr>
                <td>Email:</td>
                <td><input type="email" id='email' className='form-control' onChange={(e)=>EmailHndl(e)} defaultValue={email}/></td>
            </tr>

            <tr>
                <td>Phone:</td>
                <td><input type="text" id='Phone' className='form-control' onChange={(e)=>PhoneHndl(e)} defaultValue={phone} /></td>
            </tr>

            <tr>
                <td>country:</td>
                <td><input type="text" id='country' className='form-control' onChange={(e)=>CountryHndl(e)} defaultValue={country} /></td>
            </tr>

            <tr>
                <button type='button' className='btn btn-primary' onClick={(e)=>Clickbtn(e)}>Submit</button>
            </tr>
        </table>
       </div>
       </>
    );
}

export default Update;