// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CustomModal6: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          backgroundImage: 'url("/Layout/qc11.png")',
          backgroundSize: '100% 100%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >

<div>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center',color:'black', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 6
        </h1>

        <div style={{ backgroundColor: 'rgba(51, 51, 51, 0.3)', padding: '10px' }}>
  <p style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: '600', marginBottom: '5px', color: 'white', marginTop: '10px' }}>
    Updating Soon
  </p>
</div>
{/*}
        <p style={{ fontSize: '1.2rem', fontWeight: '600', color:'black', marginBottom: '5px' }}>
        In this BSM model, a simple structure in theory space is considered. This structure is than evolved by fractal transformations to form a fractal structure.
        The SM fields are coupled to some of these NP fields. The new physics (NP) Lagrangian for this model is given by
                </p>
          <div style={{ textAlign: 'center',  color:'black', padding: '10px', margin: '40px' }}>
          <BlockMath math="\mathcal{L}_{NP} = \mathcal{L}_{kin} - \sum_{i}^{n} m_i \overline{L_{i}}R_i - \sum_{i}^{n} m_iq_i \overline{L_{i}}R_{i+1}  + \text{h.c.}" />
          <BlockMath math="\mathcal{L}_{int.}=-Y \widetilde{H} \bar{L}_{L} R_{n+1}+ \text{h.c.}" />
          <BlockMath math="\mathcal{L}_{NCW} =\mathcal{L}_{kin} 
           - \sum_{i=1}^{n} m_i \overline{L_{i}}R_i - \sum_{k=1}^n \sum_{i=1}^{n-k+1} m_iq_i^{(k)} \overline{L_{i}}R_{i+k}  + \text{h.c.}" />

        </div>
       
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px', color:'black' }}>
        Once the link fields achieve vev, this fractal structure generates small masses and mixing amongs the flavour fields of SM.
        Depending on the experimentally observed masses and mixings, one can considered various depth of fractal transformation and/or transformation rules to match the observables.
        The base kernel structure considered is also a free parameter.
        Here is the  <a href="your_pdf_link_here" style={{ textDecoration: 'underline' }}>pdf</a> with a detailed analysis.
        </p>

        {/* Replace "Close Modal" with the cut symbol or any desired text/icon */}
        <button
  onClick={closeModal}
  style={{
    fontSize: '60px',
    color: 'none',
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

export default CustomModal6;
