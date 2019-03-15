import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import lupa from '../img/busca.png';
import ImagemService from '../services/ImagemService';
import ListaImagens from './ListaImagens';



class Pesquisa extends Component {

    constructor() {
        super();

        this.state = {
            consulta: '',
            resultados: [],
            pesquisando: false,
            nenhumResultadoEncontrado: false
        };

        this.servicoImg = new ImagemService();

        this.aoAlterarConsulta = this.aoAlterarConsulta.bind(this);
        this.consultar = this.consultar.bind(this);
    }

    consultar() {
        if (this.state.consulta) {

            this.setState({
                pesquisando: true,
                resultados: [],
                nenhumResultadoEncontrado: false
            });

            this.servicoImg
                .pesquisarImagens(this.state.consulta)
                .then(resposta => {
                    const resultadosPesquisa = resposta.data.hits;
                    if (resultadosPesquisa) {
                        if (resultadosPesquisa.length > 0) {
                            let resultadosAux = resultadosPesquisa.map(resultado => {
                                let imagem = {};
                                imagem.id = resultado.id;
                                imagem.urlPreview = resultado.previewURL;
                                imagem.urlTamanhoMedio = resultado.webformatURL;
                                imagem.urlTamanhoGrande = resultado.largeImageURL;
                                return imagem;
                            });

                            this.setState({
                                resultados: resultadosAux,
                                pesquisando: false
                            });
                        } else {
                            this.setState({
                                nenhumResultadoEncontrado: true,
                                pesquisando: false
                            });
                        }
                    }
                })
                .catch(erro => console.log(erro));
        }
    }

    aoAlterarConsulta(evento) {
        const valor = evento.target.value;
        this.setState({ consulta: valor });
    }

    render() {
        return (
            <div>
                <div id="busca">
                    <div className="input-group">
                        <input
                            id="campoBusca"
                            name="consulta"
                            value={this.state.consulta}
                            onChange={this.aoAlterarConsulta}
                            className="form-control"
                            type="text"
                            placeholder="Digite sua pesquisa" />

                        <div className="input-group-append">
                            <button onClick={this.consultar} className="btn btn-primary">
                                <img src={lupa} alt="Procurar" />
                            </button>
                        </div>
                    </div>
                </div>

                {
                    this.state.pesquisando &&
                    <ReactLoading
                        type="bars"
                        color="#bf55ec"
                        width={150}
                        className="loading" />
                }

                {
                    this.state.resultados &&
                    <ListaImagens imagens={this.state.resultados} />
                }

                {
                    this.state.nenhumResultadoEncontrado &&
                    <span>Nenhuma imagem encontrada</span>
                }
            </div>
        );
    }

}

export default Pesquisa;