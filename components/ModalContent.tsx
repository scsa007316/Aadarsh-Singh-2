// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';


const CustomModal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    // Add a class to the body when the modal is open
    const body = document.body;
    body.style.overflow = isOpen ? 'hidden' : ''; // Prevent scrolling when the modal is open
    body.classList.toggle('modal-open', isOpen);

    // Clean up the styles when the component unmounts
    return () => {
      body.style.overflow = '';
      body.classList.remove('modal-open');
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity here
          backdropFilter: 'blur(8px)',
          zIndex: 9, // Adjust the zIndex as needed (lower than content)
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '80vh',
          color: 'black',
          backgroundImage: 'url("/Layout/rusty1.jpg")',
          backgroundSize: 'cover',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >
      <div>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 1
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
          In this project, we have studied the constraints on the vector field introduced in Bondi-Sach spacetime such that the convergence of the metric to the Minkowski metric at a large distance is preserved.
        </p>
        <div style={{ textAlign: 'center', border: '3px solid black', padding: '10px', margin: '50px' }}>
          <BlockMath math={'g_{\\mu\\nu} \\xrightarrow[r \\to \\infty]{} \\eta_{\\mu\\nu}'} style={{ fontSize: '10.5rem', fontWeight: 'bold' }} />
        
          <p style={{ textAlign:'left', fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
          The generalized Bondi-Sach metric is given by
        </p>
        <BlockMath math={`g = g_{AB}(dx^A - U^A du)(dx^B - U^B du) + 2e^{2\\beta} du \\, dr + e^{2\\beta}\\frac{V}{r} du^2`} />

        </div>

        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
           The detailed work is discussed in this <a href="your_pdf_link_here" style={{ textDecoration: 'underline' }}>PDF</a>.
        </p>


        {/* Replace "Close Modal" with the cut symbol or any desired text/icon */}
        <button
          onClick={closeModal}
          style={{
            fontSize: '60px',
            color: 'white',
            background: 'none',
            border: 'none',
            position: 'absolute',
            top: '-15px',  // Adjust the top position as needed
            right: '10px',  // Adjust the right position as needed
          }}
        >
          ☠
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
