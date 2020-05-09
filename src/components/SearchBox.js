import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <label style={{ color: "white", marginRight: '10px' }}>
        Enter:
        <input style={{ marginRight: '10px' }}
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
