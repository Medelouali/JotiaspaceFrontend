import React, { useRef, useEffect, useState } from 'react';
import Mode from './Mode';

function Settings() {
    const [on, setOn] = useState(false);
    const ref=useRef(null);

    useEffect(() => {
        if(ref.current)ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [on]);

    
    return (
        <div onClick={()=>setOn(!on)} className="settings">
            <div ref={ref} className="">
                <Mode/>
            </div>
        </div>
    )
}

export default Settings;
