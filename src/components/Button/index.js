import React, {Component} from 'react';
import './index.scss';

class Button extends Component {
  render() {
    const {
      type,
      size,
      block,
      disabled,
      children,
      icon,
      iconPosition,
      onClick
    } = this.props;

    let classNames, classNamesIcon;
    switch (type) {
      case 'primary':
        classNames = 'compex-btn compex-btn-primary';
        break;
      case 'warning':
        classNames = 'compex-btn compex-btn-warning';
        break;
      case 'danger':
        classNames = 'compex-btn compex-btn-danger';
        break;
      case 'success':
        classNames = 'compex-btn compex-btn-success';
        break;
      default:
        classNames = 'compex-btn';
        break;
    }

    switch (size) {
      case 'large':
        classNames = `${classNames} compex-btn-lg`;
        break;
      case 'small':
        classNames = `${classNames} compex-btn-sm`;
        break;
      default:
        classNames = `${classNames}`;
        break;
    }

    switch (iconPosition) {
      case 'left':
        classNamesIcon = 'compex-btn-icon-left';
        break;
      default:
        classNamesIcon = 'compex-btn-icon-right';
        break;
    }

    const renderIcon = icon ? <i className={classNamesIcon}>{icon}</i> : null;
    const renderChildren =
      iconPosition === 'left' ? [renderIcon, children] : [children, renderIcon];
    return (
      <button
        disabled={disabled}
        className={block ? `${classNames} compex-btn-block` : classNames}
        onClick={onClick}>
        {renderChildren.map((child, idx) => (
          <React.Fragment key={idx}>{child}</React.Fragment>
        ))}
      </button>
    );
  }
}

export default Button;