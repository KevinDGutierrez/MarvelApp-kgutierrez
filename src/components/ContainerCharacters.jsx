import React from 'react';

export const ContainerCharacters = ({ characters, formtaImageuRL, nextPage, previousPage }) => {
    return (
        <>
            <div className="d-flex flex-row row row-cols-5">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id}>
                            <h5 className="text-warning m-3">{char.name}</h5>
                            <img src={formtaImageuRL(char)} style={{ width: '8rem' }} className="rounded-5 rounded-top-0 border border-warning m-3" />
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-between m-3">
                <button className="btn btn-warning" onClick={previousPage}>Previous</button>
                <button className="btn btn-warning" onClick={nextPage}>Next</button>
            </div>
        </>
    );
}
