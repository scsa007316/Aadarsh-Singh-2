// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CustomModal8: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          zIndex: 9998, // Adjust the zIndex as needed (lower than content)
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '80vh',
          backgroundImage: 'url("/Layout/qc3.png")',
          backgroundSize: '100% 100%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >
    <div>
            <h1 style={{ fontWeight: 'bold', color:'black', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
              Project 8
            </h1>
            <div style={{ backgroundColor: 'rgba(51, 51, 51, 0.3)', padding: '10px' }}>
  <p style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: '600', marginBottom: '5px', color: 'white', marginTop: '10px' }}>
    Updating Soon
  </p>
</div>
{/*}
            <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '5px' }}>
            In this project, we have studied the impact of element wise transformation of matrix on the Rank and Nullity and the Nullspace eigenvectors.
            The Rank-Nullity theorem states,           
              </p>
            
              <div style={{ textAlign: 'center', color:'black', border: '3px solid black', padding: '10px', margin: '40px' }}>
              Let V and W be vector spaces over the same field, and let
              <BlockMath math=" T: V \to W \," /> be a linear trsanformation. Then, the theorem asserts the following equality:
              <BlockMath math="\text{Rank}(T) + \text{Nullity}(T) = \text{dim}(V)" />
            </div>
           
            <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '10px' }}>
             For a matrix A, this translates to Rank of A + Nullity of A = Number of columns in A. Where Nullity of A is the number of elements in the basis of kernel of A.
             We have derived the conditions on the element-wise transformations which will keep the Rank-Nullity structure of the original matrix intact.
             
            </p>
            <div style={{ textAlign: 'center', color:'black', border: '3px solid black', padding: '10px', margin: '40px' }}>
            <BlockMath math="S = E(a, b) - E(a, b') + E(a', b) + E(a', b')" />
        
            </div>

            <p style={{ fontSize: '1.2rem', color:'black', fontWeight: '600', marginBottom: '10px' }}>
           The violation of this inequality under certain setups of quantum experiment demonstrated the impossibility of a Hidden variable theory underlying the quantum mechanical theory.
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

export default CustomModal8;
