import React, { Component } from 'react';
import './App.css';

import { Dropdown, Button, NavItem, Navbar, Icon } from 'react-materialize';

class App extends Component {
  renderNavbar() {
    return (
      <Navbar left className="blue-grey lighten-2">
        <NavItem>
          {this.renderMenuFile()}
        </NavItem>
        <NavItem>
          {this.renderMenuOptions()}
        </NavItem>
        <NavItem>
          {this.renderMenuTools()}
        </NavItem>
        <NavItem>
          {this.renderMenuHelp()}
        </NavItem>
      </Navbar>
    );
  }

  renderMenuFile() {
    let test = {
      belowOrigin: true
    };
    return (
      <Dropdown
        trigger={
          <Button waves="light">
            Arquivo<Icon right>arrow_drop_down</Icon>
          </Button>
        }
        options={test}
      >
        <NavItem>Novo</NavItem>
        <NavItem>Importar</NavItem>
        <NavItem>Exportar</NavItem>
        <NavItem>Salvar</NavItem>
        <NavItem>Configurações</NavItem>
        <NavItem>Gerais</NavItem>
        import $ from 'jquery';
      </Dropdown>
    );
  }

  renderMenuOptions() {
    return (
      <Dropdown
        trigger={
          <Button>
            Editar<Icon right>arrow_drop_down</Icon>
          </Button>
        }
      >
        <NavItem>Undo</NavItem>
        <NavItem>Redo</NavItem>
      </Dropdown>
    );
  }

  renderMenuTools() {
    return (
      <Dropdown
        trigger={
          <Button>
            Ferramentas<Icon right>arrow_drop_down</Icon>
          </Button>
        }
      >
        <NavItem>Gerar código</NavItem>
      </Dropdown>
    );
  }

  renderMenuHelp() {
    return (
      <Dropdown
        trigger={
          <Button>
            Ajuda<Icon right>arrow_drop_down</Icon>
          </Button>
        }
      >
        <NavItem>Preferências</NavItem>
        <NavItem>Sobre o C³-GUI</NavItem>
      </Dropdown>
    );
  }

  render() {
    return this.renderNavbar();
  }
}

export default App;
