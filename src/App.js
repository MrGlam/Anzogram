import React from 'react';
import ImageGrif from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrif/>
    </div>
  );
}

export default App;
