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
    let navbarItems = this.createNavItems(this.props.navbarItems);
    return (
      <Dropdown
        trigger={
          <Button waves="light" data-beloworigin="true" data-gutter="1">
            {this.props.menuName} <Icon>arrow_drop_down</Icon>
          </Button>
        }>
        {navbarItems}
      </Dropdown>
    );
  }
}

MenuDropdown.propTypes = {
  menuName: PropTypes.string.isRequired,
  navbarItems: PropTypes.array.isRequired,
};

export default MenuDropdown;
