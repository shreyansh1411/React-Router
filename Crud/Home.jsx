import React from 'react';
import { useState } from 'react';
import { PostAPIAction } from '../Action/index'
import { useDispatch } from 'react-redux';

function Home(props) {
    const dispatch = useDispatch();
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [country,setcountry]=useState('')

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
                    (e)} /></td>
            </tr>

            <tr>
                <td>Email:</td>
                <td><input type="email" id='email' className='form-control' onChange={(e)=>EmailHndl(e)} /></td>
            </tr>

            <tr>
                <td>Phone:</td>
                <td><input type="text" id='Phone' className='form-control' onChange={(e)=>PhoneHndl(e)} /></td>
            </tr>

            <tr>
                <td>country:</td>
                <td><input type="text" id='country' className='form-control' onChange={(e)=>CountryHndl(e)} /></td>
            </tr>

            <tr>
                <button type='button' className='btn btn-primary' onClick={(e)=>Clickbtn(e)}>Submit</button>
            </tr>
        </table>
       </div>
       </>
    );
}

export default Home;