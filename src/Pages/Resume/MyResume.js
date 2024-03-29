import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import myPdf from '../../Assets/Timothy-resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const MyResume = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Document file={myPdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
        </Document>
    );
};

export default MyResume;