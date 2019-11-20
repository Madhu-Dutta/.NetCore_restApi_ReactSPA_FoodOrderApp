import React from 'react';
import DisplayItems from "./components/displayItems";
import DisplayOrder from "./components/displayOrder";
import Footer from "./components/footer";
import UploadFood from './components/uploadFood';

function App() {

  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />
      <DisplayItems />
      <UploadFood />
      <DisplayOrder />
      <footer >
        <Footer />
      </footer >
    </React.Fragment >
  );
}

export default App;
