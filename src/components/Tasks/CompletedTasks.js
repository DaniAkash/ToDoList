import React, {Component} from 'react';

import Tasks from './index';

export default class CompletedTasks extends Component {
  render() {
    return <Tasks status={'completed'} />;
  }
}