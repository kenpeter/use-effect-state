import React from 'react';
import UserForm from './UserForm';

const imaginaryUser = {
  email: '',
  username: '',
  imaginaryThingId: null,
};

function App() {
  return (
    <div className="App">
      <UserForm user={imaginaryUser} />
    </div>
  );
}

export default App;
