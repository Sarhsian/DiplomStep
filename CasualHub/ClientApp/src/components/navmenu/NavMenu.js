import React from 'react';
import { Collapse, Navbar, NavbarBrand, UncontrolledDropdown, NavItem, NavLink, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeLanguage } from './../../localizations/actions';
import { navMenuItems } from './NavMenuLocalization';

class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: this.props.lang,
      dropDownOpen: false,
      isOpen: false
    };
  }
  //коли зміна в редаксі приходять нові пропси
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    this.setState({ language: nextProps.lang });
  }

  toggle = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    })
  }

  handleChange = (language) => {
    this.props.changeLanguage(language);
  }
  togglenav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { language } = this.state;
    navMenuItems.setLanguage(language);
    return (
      <header>
        <Navbar className="navbar-expand-lg navbar-toggleable-lg border-bottom box-shadow mb-3" expand="lg">
          <NavbarBrand tag={Link} to="/">CasualHub</NavbarBrand>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: this.props.sidebarOpened
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={this.togglenav}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar3" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
          </div>

          <Collapse className="d-lg-inline-flex flex-lg-row-reverse" isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/">{navMenuItems.home}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/counter">{navMenuItems.counter}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/fetch-data">{navMenuItems.fetch_data}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/products">{navMenuItems.products}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/register">{navMenuItems.registr}</NavLink>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown >

                  <ButtonDropdown >

                    <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
                      <DropdownToggle color="primary" caret className="dropdown-toggle">
                        <div>
                          <img alt="Current flag" width="20" height="20"
                            src={navMenuItems.language}>
                          </img>
                        </div>
                      </DropdownToggle>
                      <DropdownMenu className="currency-dropdown">
                        <DropdownItem onClick={() => this.handleChange("ua")} dropdownvalue="ua">
                          <div className="container">
                            <div className="row">
                              <div>
                                <img alt="flag of Ukraine" width="20" height="20"
                                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/flag-ukraine_1f1fa-1f1e6.png">
                                </img>
                              </div>
                              <div>
                                Українська
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                        <DropdownItem onClick={() => this.handleChange("ru")} dropdownvalue="ru">
                          <div>
                            <img alt="flag of Russia" width="20" height="20"
                              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/flag-russia_1f1f7-1f1fa.png">
                            </img>
                            <div>
                              Русский
                            </div>
                          </div>                          
                        </DropdownItem>
                        <DropdownItem onClick={() => this.handleChange("en")} dropdownvalue="en">
                          <div>
                            <img alt="flag of England" width="20" height="20"
                              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/flag-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png">
                            </img>
                            <div>
                              English
                            </div>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                  </ButtonDropdown>

                </UncontrolledDropdown>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

const mapState = (store) => {
  return {
    lang: store.localization.lang
  }
}


NavMenu.propTypes = {
  lang: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired
}

export default connect(mapState, { changeLanguage })(NavMenu);