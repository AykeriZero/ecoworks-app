// Exports a component which renders the current lesson Based on props passed
// NOT an object containing all the components

import React, { Component } from 'react';

import LessonPage1 from './LessonPage1';

class LessonPage extends Component {

  render() {
    if (this.props.id === 1) {
      return <LessonPage1 />;
    }
  }

}

export default LessonPage;
