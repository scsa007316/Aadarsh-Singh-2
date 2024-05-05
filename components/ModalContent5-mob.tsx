// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const CustomModal5: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          backgroundImage: 'url("/Layout/pirate5.png")',
          backgroundSize: '100% 100%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >

<div>
        <h1 style={{ fontWeight: 'bold', color:'black', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 5
        </h1>

        <div style={{ backgroundColor: 'rgba(51, 51, 51, 0.3)', padding: '10px' }}>
  <p style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: '600', marginBottom: '5px', color: 'white', marginTop: '10px' }}>
    Updating Soon
  </p>
</div>
{/*}
        <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '5px' }}>
        In this BSM model too, N number of BSM fields are assumed for each flavour. Similar to the CW model, this model works by the production of suppressed couplings from natural parameters. But in contrast to CW, here the suppression of coupling is not by well-designed field interactions but due to randomness in the fundamental parameters of the model. The well-known Anderson localization will ensure the production of highly localized modes which leads to very tiny couplings and hence small neutrino masses. The new physics (NP) Lagrangian for this model is given by
        </p>
          <div style={{ textAlign: 'center', color:'black',  padding: '10px', margin: '40px' }}>
          <BlockMath math="\mathcal{L}_{Petersen} = \mathcal{L}_{Kin} - \sum_{i,j=1}^{N} \overline{L_{i}}\epsilon_{i,j}R_j - \sum_{i,j=1}^{N/4} \overline{L_{i}}\frac{g}{b^{|i-j|}}\left(\delta_{i, j+N/4} + \delta_{i+N/4, j}\right)R_j " />
          <BlockMath math="- \sum_{i,j=1}^{N/2} \overline{L_{i}}\frac{g}{b^{|i-j|}}\left(\delta_{i, j+N/2} + \delta_{i+N/2, j}\right)R_j -\sum_{i,j=N/2+1}^{N} \overline{L_{i}}\frac{g}{b^{|i-j|}}\left(\delta_{i, j+1} \right)R_j -\sum_{i,j=N/2+1}^{N} \overline{L_{i}}\frac{g}{b^{|i-j|}}\left(\delta_{i+1, j}\right)R_j  + \text{h.c.}" />
          <BlockMath math="\mathcal{L}_{int.}=  Y_1\overline{\nu}_LHR_1 + Y_2\overline{\nu}_RHL_n + \text{h.c.}" />

        </div>
       
        <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '10px' }}>
        The mass dimension parameters are random here. In the work, we have considered various underlying geometries and enquired about the impact of geometry on mixing and mass generation.
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

export default CustomModal5;
