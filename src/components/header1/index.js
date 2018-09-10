import React from 'react';
import Standard from './standard';

class HeaderNew extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
        return (
            <Standard
                
            />
        );
    }
}

export default HeaderNew;
