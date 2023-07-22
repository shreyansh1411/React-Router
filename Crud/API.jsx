import axios from "axios";
export async function AxiosReqiest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}

const GetAPIDetails=()=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosReqiest('http://localhost:3000/details','GET',headers,{})
}


//Delete Data

const DeleteAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosReqiest('http://localhost:3000/details/'+id,'DELETE',headers,{})
}



//App Data

const PostAPIDetails=(data)=>{
    axios.post('http://localhost:3000/details',data)
}

//Edit data

const EditAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosReqiest('https://localhost:3000/details/'+id,'GET',headers,{})
}
export {GetAPIDetails,DeleteAPIDetails,PostAPIDetails,EditAPIDetails}