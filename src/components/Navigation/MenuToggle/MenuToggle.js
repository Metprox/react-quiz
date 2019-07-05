import React from 'react'
import cls from './MenuToggle.css';

const MenuToggle = props => {
    const classes = [
        cls.MenuToggle,
        'fa',
    ]

    if (props.isOpen) {
        classes.push('fa-times')
        classes.push(cls.open)
    } else {
        classes.push('fa-bars')
    }

  return (
    <i className={classes.join(' ')} onClick={props.onToggle} >
      
    </i>
  )
}

export default MenuToggle
