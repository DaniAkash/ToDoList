import React, {PropTypes} from 'react';

const NavigationBar = () => {
  return (
    <div className="tasks-header"><a href="#" className="active">All</a>
      {'|'}
      <a href="#">Pending</a>
      {'|'}
      <a href="#">Completed</a>
      {'|'}
      <a href="#">Clear Completed (1)</a>
    </div>
  );
};

export default NavigationBar;