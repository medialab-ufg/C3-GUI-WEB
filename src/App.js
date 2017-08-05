import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul id="arquivo-opcoes" className="dropdown-content">
          <li>
            <a>Novo</a>
          </li>
          <li className="divider" />
          <li>
            <a>Importar</a>
          </li>
          <li className="divider" />
          <li>
            <a>Exportar</a>
          </li>
          <li className="divider" />
          <li>
            <a>Salvar</a>
          </li>
          <li className="divider" />
          <li>
            <a>Configurações </a>
          </li>
          <li className="divider" />
          <li>
            <a>Gerais</a>
          </li>
          <li className="divider" />
          <li>
            <a>Sair</a>
          </li>
        </ul>

        <ul id="editar-opcoes" className="dropdown-content">
          <li>
            <a>Undo</a>
          </li>
          <li className="divider" />
          <li>
            <a>Redo</a>
          </li>
        </ul>

        <ul id="ferramentas-opcoes" className="dropdown-content">
          <li>
            <a>Gerar código</a>
          </li>
        </ul>

        <ul id="ajuda-opcoes" className="dropdown-content">
          <li>
            <a>Preferências </a>
          </li>
          <li className="divider" />
          <li>
            <a> Sobre o C³gui </a>
          </li>
        </ul>

        <nav className="nav-extended">
          <div className="nav-wrapper blue-grey lighten-2">
            <ul className="left hide-on-med-and-down">
              <li>
                <a className="dropdown-button" data-activates="arquivo-opcoes">
                  Arquivo<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a className="dropdown-button" data-activates="editar-opcoes">
                  Editar<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-button"
                  data-activates="ferramentas-opcoes"
                >
                  Ferramentas<i className="material-icons right">
                    arrow_drop_down
                  </i>
                </a>
              </li>
              <li>
                <a className="dropdown-button" data-activates="ajuda-opcoes">
                  Ajuda<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-content blue-grey lighten-2">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a href="test1">C¹</a>
              </li>
              <li className="tab">
                <a href="test2">C²</a>
              </li>
              <li className="tab">
                <a href="test3">C³</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
