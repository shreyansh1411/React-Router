const Intialata={
    details:[],
}

const reducer=(state=Intialata,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
            default:return state
    }
}

export default reducer;