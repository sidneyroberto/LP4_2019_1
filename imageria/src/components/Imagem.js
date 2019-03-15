import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Imagem extends Component {

    render() {
        return (
            <div key={this.props.imagem.id} className="imagem">
                <Link to={{ pathname: '/visualizacao', state: { imagem: this.props.imagem } }}>
                    <img src={this.props.imagem.urlPreview} alt="Imagem" />
                </Link>
            </div>
        );
    }
}

export default Imagem;