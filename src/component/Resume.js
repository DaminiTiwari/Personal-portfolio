import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { pdfjs, Document, Page } from 'react-pdf';
import '../styles/resume.css';
import samplePDF from '../demoResume.pdf';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume(props) {

  const [resumePath, setResumePath] = useState();

  const fetchResume = async ()  => {
    const snapshot = await firebase.firestore().collection('resume').get()
    return snapshot.docs.map(doc => setResumePath(doc.data()));
}
// console.log('resumePath',resumePath.resume)

  useEffect(() => {
    fetchResume()
  }, []);



  return (
    <div className="resume_box">
    <Document file={samplePDF}>
    <Page pageNumber={1} />
    </Document>
    </div>
  );
}