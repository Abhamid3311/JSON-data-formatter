import React from 'react';
import JsonFormatter from 'react-json-formatter'

const UseNpm = () => {

    const sampleText = `
    {name:'hamid,roll:201,class:'seven'}
    `
    const sample = JSON.stringify(sampleText);

    const jsonStyle = {
        propertyStyle: { color: 'red' },
        stringStyle: { color: 'green' },
        numberStyle: { color: 'darkorange' }
    }

    return (
        <div>
            <JsonFormatter json={sample} tabWith={4} jsonStyle={jsonStyle} />
        </div>
    );
};

export default UseNpm;