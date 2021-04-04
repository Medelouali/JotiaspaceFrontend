const action=(index)=>{
    return {
        type: "ChatIndexer",
        payload: index
    }
}

export default action;