// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const CustomModal7: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          backgroundImage: 'url("/Layout/pirat2.png")',
          backgroundSize: '100% 100%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >
    <div>
            <h1 style={{ fontWeight: 'bold', color:'black', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
              Project 7
            </h1>
    
            <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '5px' }}>
            In this project, we have studied the principles of quantum information and used its principles to create various protocols for secure communication via quantum dense coding. The notion of information is defined by the Shannon entropy of the system given by
                    </p>
              <div style={{ textAlign: 'center', color:'black', border: '3px solid black', padding: '10px', margin: '40px' }}>
              <BlockMath math="H(X) = -\sum_{i=1}^{n} P(x_i) \log_{2} P(x_i)" />

            </div>
           
            <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '10px' }}>
            Shanon entropy measures the uncertainity associated with classical probability distribution.
            Its quantum analog is given by Von Neumann entropy. Based on these definitions various useful quantities of the system such as Mutual information, Joint entropy, Conditional entropy etc are defined.
           <br></br>
           The Bell's CHSH Inequality in quantum mechanics writes out the condition for the existence of a local and deterministic fundamental theory. This inequality includes the measurable given as
            </p>
            <div style={{ textAlign: 'center', color:'black', border: '3px solid black', padding: '10px', margin: '40px' }}>
            <BlockMath math="S = E(a, b) - E(a, b') + E(a', b) + E(a', b')" />
            <BlockMath math="\lvert S \rvert \leq 2" />
            <BlockMath math="E(a,b) = \int A(a,\lambda)^* B(b,\lambda)^* \rho(\lambda) \, d\lambda" />

            </div>

            <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '10px' }}>
           The violation of this inequality under certain setups of quantum experiment demonstrated the impossibility of a Hidden variable theory underlying the quantum mechanical theory.
           Here is the  <a href="your_pdf_link_here" style={{ textDecoration: 'underline' }}>PDF</a> with a detailed analysis.
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

export default CustomModal7;
