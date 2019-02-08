// Exports a component which renders the current lesson Based on props passed
// NOT an object containing all the components

import React, { Component } from 'react';

import LessonPage1 from './LessonPage1';
import LessonPage4 from './LessonPage4';
import LessonPage5 from './LessonPage5';


class LessonPage extends Component {

  render() {
    switch (this.props.lesson.id) {
      case 1:
        return <LessonPage1 lesson={this.props.lesson} />;
      case 2:
        return <LessonPage1 lesson={this.props.lesson} />;
      case 3:
        return <LessonPage1 lesson={this.props.lesson} />;
      case 4:
        return <LessonPage4 lesson={this.props.lesson} />;
      case 5:
        return <LessonPage5 lesson={this.props.lesson} />;
      default:
        return <LessonPage1 lesson={this.props.lesson} />;
    }
  }

}

export default LessonPage;
