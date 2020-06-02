import React, { useState } from 'react';
import { render } from '@testing-library/react';

class AddCard extends React.Component {

  state = {
    term: '',
    definition: ''
  }

  sub

  render() {
    return (
      <div>
        <form>
          <h1>Create a new card</h1>
          <label>Term</label>
          <input type="text" placeholder="Enter Term" />
          <label>Definition</label>
          <input type="text" placeholder="Enter Definition" />
          <input type="submit"></input>
        </form>
      </div>
    )
  };
}

// export default AddCard();