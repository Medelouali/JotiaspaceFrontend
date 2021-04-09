const action=(pl)=>{
    return{
        type: "Signer",
        payload: {
            key: pl.key,
            value: pl.value
        }
    }
};

export default action;