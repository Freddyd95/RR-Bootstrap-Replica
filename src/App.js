import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavBar from './Components/Navbar';
import BackgroundImageForm from './Components/images';
import StoreListings from './Components/StoreListing';

function App() {
  return (
    <div>
      <CustomNavBar />
      <Container>
        <BackgroundImageForm />
        <StoreListings />
      </Container>
    </div>
  )
}

export default App;
