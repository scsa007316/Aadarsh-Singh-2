// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';


interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CustomModal3: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          backgroundImage: 'url("/Layout/pirate3.png")',
          backgroundSize: '100% 100%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >
      <div>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 3
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
        In this project, we have explored several beyond-standard model Lagrangians and their potential to solve some SM problems. We focused specifically on the natural generation of hierarchically small masses of neutrinos and their mixings observed in nature.
        The SM neutrino interactions with other fields are not sufficient to account for this hence some extensions of SM are proposed.
        </p>
        <div style={{ textAlign: 'center',  padding: '10px', margin: '20px' }}>
        <BlockMath math="\mathcal{L}_{BSM} = \mathcal{L}_{SM} + \mathcal{L}_{NP} + \mathcal{L}_{Int.}" />

        </div>

        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
        In Clockwork BSM model, N number of BSM fields are assumed for each flavour and they interact with each other in a very particular way that via a clockwork-like mechanism generates a hierarchically small coupling which ultimately leads to neutrinos having small masses. The new physics (NP) Lagrangian for this model is given by
         </p>
          <div style={{ textAlign: 'center', padding: '10px', margin: '40px' }}>
          <BlockMath math="\mathcal{L}_{NP} = \mathcal{L}_{kin} - \sum_{i}^{n} m_i \overline{L_{i}}R_i - \sum_{i}^{n} m_iq_i \overline{L_{i}}R_{i+1}  + \text{h.c.}" />
          <BlockMath math="\mathcal{L}_{int} = -Y \widetilde{H} \bar{L}_{L} R_{n+1}+ \text{h.c.}" />

        </div>
       
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
        In the project, we have studied several variants of this model and compared their efficiency and also have given some phenomenological signatures. Here is the pdf with a detailed analysis.
        The detailed work is discussed in this <a href="your_pdf_link_here" style={{ textDecoration: 'underline' }}>PDF</a> (uploaded soon).
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

export default CustomModal3;
