import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

export default function UserInfo(props) {
  return (
    <div className="row menu_bar">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" media="all" />
      <div className="menu_home">
        <img src={require('../../../../assets/icons/menu_home.png')} alt=""/>
      </div>
      <div className="menu_items">
        CREATE LICENSE
      </div>
      <div className="menu_items">
        <DropdownMenu className="menu_items" triggerType='text' trigger='VIEW LICENSE'>
          <MenuItem text='Mission' location='/texttrigger' />
          <MenuItem text='Our Team' location='/texttrigger' />
          <MenuItem text='Reviews' location='/texttrigger' />
          <MenuItem text='Contacts' location='/texttrigger' />
          <MenuItem text='Map' location='/texttrigger' />
        </DropdownMenu>
      </div>
      <div className="menu_items">
        BUY LICENSE
      </div>
      <div className="menu_items">
        SERVICE
      </div>
      <div className="menu_items">
        FINANCE
      </div>
      <div className="menu_items">
        SETTINGS
      </div>
      <div className="menu_out">
        <img src={require('../../../../assets/icons/menu_out.png')} alt=""/>
      </div>
    </div>

  );
}
