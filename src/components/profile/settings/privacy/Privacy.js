import React from 'react';
import Question from './Question';

function Privacy(){
    return (
        <div className="inner-privacy">
            <Question question="Who Can See My Location?"/>
            <Question question="Who Can See My Friends List?"/>
            <Question question="Who Can See My Dealers Network?"/>
            <Question question="Who Can See My Job?"/>
            <Question question="Who Can See My Analytics?"/>
            <Question question="Who Can See My Intrests?"/>
            <Question question="Who Can See My Posts?"/>
        </div>
    )
}

export default Privacy;
