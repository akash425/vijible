import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h2>Upload</h2>
      <div {...getRootProps()} style={{ border: '2px dashed #8884d8', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

export default Upload;
