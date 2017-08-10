import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown, Button, NavItem, Icon} from 'react-materialize';

class MenuDropdown extends React.Component {
  // TODO: easier to turn into objects later
  createNavItems(dropdownItems) {
    let names = dropdownItems || [];
    return names.map((item, index) =>
      <NavItem href={'#!'} key={index}>
        {item}
      </NavItem>,
    );
  }

  render() {
    let options = {
      belowOrigin: true,
    };
    let navbarItems = this.createNavItems(this.props.navbarItems);
    return (
      <Dropdown
        trigger={
          <Button waves="light">
            {this.props.menuName}
            <Icon right>arrow_drop_down</Icon>
          </Button>
        }
        options={options}>
        {navbarItems}
      </Dropdown>
    );
  }
}

MenuDropdown.propTypes = {
  menuName: PropTypes.string,
  navbarItems: PropTypes.array,
};

export default MenuDropdown;
