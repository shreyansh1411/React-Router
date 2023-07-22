const Intialata={
    details:[],
    isDelete:false,
    isRequest:false
}

const reducer=(state=Intialata,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
        case 'DELETE_DETAILS':
            return{
                isDelete:action.payload
            }

        case 'POST_DETAILS':
            return{
                isRequest:action.payload
            }
            default:return state
    }
}

export default reducer;