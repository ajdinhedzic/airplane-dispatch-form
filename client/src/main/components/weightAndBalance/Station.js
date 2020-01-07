import React, { useState } from 'react';
import { roundToTwoDecimalPlaces } from '../../util/Math';

export function Station({ data, update }) {
    let [weight, setWeight] = useState('');
    let [isEditing, setIsEditing] = useState(true);

    let doneEditing = () => {
        setIsEditing(false);
        let newMoment = roundToTwoDecimalPlaces(weight * data.arm);
        update({
            name: data.name,
            weight: weight,
            moment: newMoment
        });
    };

    return (
        <tr>
            <td>{data.name}</td>
            <td> {isEditing ? <input
                    className='weight'
                    onChange={e => setWeight(Math.abs(e.target.value))}
                    value={weight}/>
                : <span>{weight}</span>}
            </td>
            <td>{data.arm}</td>
            <td className='moment'>{data.moment}</td>
            <td> {isEditing ? <button className='btn btn-success save' onClick={doneEditing}>Save</button>
                : <button className='btn btn-primary' onClick={() => setIsEditing(!isEditing)}>Edit</button>}
            </td>
        </tr>
    )
}