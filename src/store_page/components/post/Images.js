import React from 'react'

function Images({urls}) {
    return (
        <div className="urls">
            {urls.map((url, index)=>(
                <img src={url} key={`${url}#${index}`} alt=""/>
            ))}
        </div>
    )
}

export default Images;


