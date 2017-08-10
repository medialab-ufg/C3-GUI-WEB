import React, { Component } from 'react';
import './App.css';

import { Dropdown, Button, NavItem, Navbar, Icon } from 'react-materialize';

class App extends Component {
  renderNavbar() {
    let menuItens = [
      this.renderMenuFile(),
      this.renderMenuOptions(),
      this.renderMenuTools(),
      this.renderMenuHelp()
    ].map((item, index) =>
      <NavItem key={index}>
        {item}
      </NavItem>
    );
    return (
      <Navbar left className="blue-grey lighten-2">
        {menuItens}
      </Navbar>
    );
  }

  static createNavItens(itens) {
    let names = itens || [];
    return names.map((item, index) =>
      <NavItem key={index}>
        {item}
      </NavItem>
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
        {App.createNavItens([
          'Novo',
          'Importar',
          'Exportar',
          'Salvar',
          'Configurações Gerais'
        ])}
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
        {App.createNavItens(['Undo', 'Redo'])}
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
        {App.createNavItens(['Gerar código'])}
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
        {App.createNavItens(['Preferências', 'Sobre o C³-GUI'])}
      </Dropdown>
    );
  }

  render() {
    return this.renderNavbar();
  }
}

export default App;
