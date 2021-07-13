import React from 'react';

function Field({field_name}) {
    return (
        <div className="field">
            <label className="field-label" htmlFor={field_name}>{field_name}</label>
            <textarea className="data-input" name={field_name} id={field_name} cols="30" rows="10" required></textarea>
        </div>
    )
}

export default Field;