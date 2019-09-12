import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const docUploadConfig = {
  fileTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

    // excel
    'application/vnd.ms-excel',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/msexcel',
    'application/x-msexcel',
    'application/x-ms-excel',
    'application/x-excel',
    'application/x-dos_ms_excel',
    'application/xls',
    'application/x-xls',
    'application/x-msi',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain',
    'text/xml',

    'application/xml',

    'text/html',
    'application/rtf',
    'text/csv',
    'image/tiff',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/bmp',
    'application/x-afp',
    'application/vnd.ibm.modcap'
  ],
  minSize: 0,
  maxSize: 2097152,
  isMultipleFiles: false
};

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Do something with the files

    console.log('accept', acceptedFiles);
    console.log('reject', rejectedFiles);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: docUploadConfig.fileTypes.join(',')
    //accept: 'application/rtf'
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <MyDropzone />
    </div>
  );
}

export default App;
