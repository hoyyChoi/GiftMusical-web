
let initialState = {
    start:'',
    end:'',
    currentId:0,
    description:'',
    auth:false
}

const reducer=(state=initialState,action)=>{
    if(action.type === 'create'){
        return {...state,start:action.payload.start,end:action.payload.end,currentId:action.payload.currentId}
    }else if(action.type === 'seeDescription'){
        return {...state,description:action.payload.description}
    }else if(action.type === 'auth'){
        return {...state,auth:true}
    }else if(action.type === 'authB'){
        return {...state,auth:false}
    }
    return {...state}
}


export default reducer