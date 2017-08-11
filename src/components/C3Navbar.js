import React from 'react';

import {Navbar} from 'react-materialize';
import MenuDropdown from './MenuDropdown';

class C3Navbar extends React.Component {
  renderMenuFile() {
    let menuItems = [
      'Novo',
      'Importar',
      'Exportar',
      'Salvar',
      'Configurações Gerais',
    ];
    return <MenuDropdown menuName="Arquivo" navbarItems={menuItems} />;
  }

  renderMenuOptions() {
    let menuItems = ['Undo', 'Redo'];
    return <MenuDropdown menuName="Editar" navbarItems={menuItems} />;
  }

  renderMenuTools() {
    let menuItems = ['Gerar código'];
    return <MenuDropdown menuName="Ferramentas" navbarItems={menuItems} />;
  }

  renderMenuHelp() {
    let menuItems = ['Preferências', 'Sobre o C³-GUI'];
    return <MenuDropdown menuName="Preferências" navbarItems={menuItems} />;
  }

  render() {
    let menuItems = [
      this.renderMenuFile(),
      this.renderMenuOptions(),
      this.renderMenuTools(),
      this.renderMenuHelp(),
    ].map((item, index) =>
      <li key={index}>
        {item}
      </li>,
    );
    return (
      <Navbar brand="C³-GUI" left className="blue-grey lighten-2">
        {menuItems}
      </Navbar>
    );
  }
}

export default C3Navbar;
