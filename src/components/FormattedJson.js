import React, { useState } from 'react';

const FormattedJson = () => {

    //Handle Formate JSON 
    const handleUnformattedJson = () => {
        try {
            const badJson = document.getElementById('ugly-jsons').value;
            const parseJson = JSON.parse(badJson);

            const JSONInPrettyFormat = JSON.stringify(parseJson, undefined, 4);
            document.getElementById('formated-json').value = JSONInPrettyFormat
        } catch (e) {
            console.log('error', e);
            document.getElementById('formated-json').value = e;

        }
    };


    //reset button
    const resetBtn = () => {
        document.getElementById('formated-json').value = '';
        document.getElementById('ugly-jsons').value = '';
    };




    return (
        <div className='text-center'>
            <h2 className='text-3xl mb-8'>Please Formate Your JSON</h2>
            <div >
                <button onClick={handleUnformattedJson} className='btn btn-success'>Formate JSON</button>
                <button onClick={resetBtn} className='btn btn-error'>Clear Data</button>
            </div>

            <div className='flex flex-row w-1/2 mx-auto mt-8'>
                <div className='w-96 mr-4'>
                    <label htmlFor="ugly-json">Enter JSON Data</label>
                    <textarea
                        name="ugly-json"
                        id="ugly-jsons"
                        cols="40" rows="18"
                        className='textarea textarea-primary'></textarea>
                </div>

                <div className='w-96'>
                    <label htmlFor="formated-json">Formatted JSON Data</label>
                    <textarea
                        name="formated-json"
                        id="formated-json"
                        cols="40" rows="18"
                        readOnly
                        className='textarea textarea-primary'></textarea>
                </div>
            </div>
        </div>
    );
};

export default FormattedJson;