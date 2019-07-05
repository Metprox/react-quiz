import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import cls from "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={cls.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const classes = [cls.Drawer];

    if (!this.props.isOpen) {
      classes.push(cls.close);
    }

    const links = [{ to: "/", label: "Список", exact: true }];
    console.log('AUTH', this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      links.push({ to: "/quiz-creator", label: "Создать тест", exact: false });
      links.push({ to: "/logout", label: "Выйти", exact: false });
    } else {
      links.push({ to: "/auth", label: "Авторизация", exact: false });
    }

    return (
      <React.Fragment>
        <nav className={classes.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
