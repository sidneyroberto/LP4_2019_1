import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import coracaoCheio from '../img/coracao_cheio.png';
import coracaoVazio from '../img/coracao_vazio.png';

class VisualizacaoImagem extends Component {

    constructor() {
        super();

        this.state = {
            imagemFavorito: coracaoVazio,
            favorito: false
        };

        this.favoritar = this.favoritar.bind(this);
    }

    favoritar() {
        const favorito = !this.state.favorito;
        const imagemFavorito = favorito
            ? coracaoCheio
            : coracaoVazio;
        this.setState({ imagemFavorito, favorito });
    }

    render() {
        const imagem = this.props.location.state.imagem;

        return (
            <div>
                <div className="row visualizacaoImagem">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={imagem.urlTamanhoMedio} alt="Imagem" />
                        </div>
                    </div>
                </div>

                <div className="row favorito">
                    <div className="col">
                        <button onClick={this.favoritar}>
                            <img src={this.state.imagemFavorito} alt="Favoritar" />
                        </button>
                    </div>
                </div>

                <div className="row downloadImagem">
                    <div className="col">
                        <a
                            href={imagem.urlTamanhoGrande}
                            className="btn btn-primary"
                            rel="noopener noreferrer"
                            target="_blank">
                            Download
                        </a>

                        <Link to="/">
                            <span className="btn btn-secondary">
                                Voltar
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default VisualizacaoImagem;