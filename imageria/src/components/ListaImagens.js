import React, { Component } from 'react';
import Imagem from './Imagem';

class ListaImagens extends Component {

    render() {

        const listaImagens = this.props.imagens
            .map(imagem => {
                return (
                    <Imagem imagem={imagem} />
                )
            });

        return (
            <div className="row listaImagens">
                {listaImagens}
            </div>
        );
    }
}

export default ListaImagens;