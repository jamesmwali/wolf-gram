import React, { useState } from "react";
import ImageGrid from "./comps/image-grid";
import Modal from "./comps/modal";
import Title from "./comps/Title";
import UploadForm from "./comps/upload-form";
import "./index.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />

      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
