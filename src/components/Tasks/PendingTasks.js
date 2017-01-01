import React, {Component} from 'react';

import Tasks from './index';

export default class PendingTasks extends Component {
  render() {
    return <Tasks status={'pending'} />;
  }
}