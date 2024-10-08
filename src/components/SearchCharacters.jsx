import React, { useState } from 'react';

export const SearchCharacter = ({ searchCharacter }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCharacter(query);
    }

    return (
        <>
            <nav className="navbar bg-warning border-bottom border-body">
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2 border border-warning text-warning" type="search" placeholder="Buscar" aria-label="Search"value={query}onChange={(e) => setQuery(e.target.value)}/>
                        <button className="btn btn-outline-dark border border-dark text-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </>
    );
}
