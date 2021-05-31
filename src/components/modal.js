import React, {useState} from 'react';

// PDF Viewer
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import { Modal, Button } from 'antd';
import Modal from 'react-modal';

const ModalPDF = (props) => {
    const [visible, visiFunc] = useState(false);

	const openModal = () => {visiFunc(true)};
	const closeModal = () => {visiFunc(false)};

    return(
        <>
        <button  onClick={()=>openModal()} id="modalButton">
            <span>{props.title}</span>
            
        </button>
        <Modal
            isOpen={visible}
            contentLabel="Riverflow"
            className="Modal"
            onRequestClose={closeModal} >

            <h1 className="modal-title">{props.title}</h1>
            <button onClick={() => closeModal()} style={{float: 'right', color: 'white', backgroundColor: 'red'}}>Close</button>

            <Worker 
                workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div style={{ height: '90%', }} >
                    <Viewer fileUrl={props.pdf} />
                </div>
            </Worker>
            
        </Modal>
        </>
    )
}

export default ModalPDF;