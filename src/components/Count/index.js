import React, { PropTypes } from 'react';

const { string, number, func } = PropTypes;

const Count = ({ title, id, value, onChange }) => (
  <div>
    <label htmlFor={id}> {title} </label>
    <input
      id={id}
      type="number"
      value={value}
      onChange={onChange}
    />
  </div>
);

Count.propTypes = {
  title: string,
  id: string,
  value: number,
  onChange: func,
};

export default Count;
