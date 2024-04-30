// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CustomModal4: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          backgroundImage: 'url("/Layout/pirate4.png")',
          backgroundSize: '100% 100%',
          color: 'black',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >

<div>
<h1 style={{ fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 4
    </h1> 
    <div style={{ backgroundColor: 'rgba(51, 51, 51, 0.3)', padding: '10px' }}>
  <p style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: '600', marginBottom: '5px', color: 'white', marginTop: '10px' }}>
    Updating Soon
  </p>
</div>

       {/* <h1 style={{ fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 4
    </h1> 

        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
        In this BSM model, N number of BSM fields are assumed for each flavour. Here the small mass of SM active neutrino is generated not because of coupling suppression as in CW or Randomness model but because of the very fine cancellation of large numbers in the model to produce very tiny numbers. The way the Lagrangian is devised makes sure this mechanism is applied naturally. The new physics (NP) Lagrangian for this model is given by       
  </p>
          <div style={{ textAlign: 'center', border: '3px solid black', padding: '10px', margin: '40px' }}>
          <BlockMath math="\mathcal{L}_{NP} = \mathcal{L}_{kin}  - \sum_{i,j=1}^{n} \overline{L_{i}}\mathcal{H}_{i,j}R_j  + \text{h.c.}" />
          <BlockMath math="\mathcal{H}_{i,j} = \epsilon \delta_{i,j} - t(\delta_{i+1,j} + \delta_{i,j+1} )" />
          <BlockMath math="\mathcal{L}_{int.}=  Y\overline{\nu}_LHR_1 + Y\overline{\nu}_RHL_n + \text{h.c.}" />

        </div>
       
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
        In the project, we have proposed this novel mechanism and have also given a detailed analysis and implication of this model in accounting for SM neutrino masses. Also, phenomenological experimental signatures have also been proposed. Here is the  <a href="your_pdf_link_here" style={{ textDecoration: 'underline' }}>pdf</a> with a detailed analysis.
        </p>
    */}
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

export default CustomModal4;
