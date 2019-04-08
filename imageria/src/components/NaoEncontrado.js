import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NaoEncontrado extends Component {

    render() {
        return (
            <div>
                <h3>Página não encontrada</h3>
                <Link to="/">
                    <span className="btn btn-primary">Voltar</span>
                </Link>
            </div>

        );
    }
}

export default NaoEncontrado;
