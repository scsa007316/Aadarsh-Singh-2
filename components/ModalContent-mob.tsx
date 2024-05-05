// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface CustomMathComponentProps {
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  border?: string;
  padding?: string;
  margin?: string;
}

const CustomMathComponent: React.FC<CustomMathComponentProps> = () => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    border: '3px solid black',
    padding: '10px',
    margin: '50px',
  };

  const paragraphStyle: React.CSSProperties = {
    textAlign: 'left',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
  };

  return (
    <div>
      <BlockMath math={'g_{\\mu\\nu} \\xrightarrow[r \\to \\infty]{} \\eta_{\\mu\\nu}'} />
      <p style={paragraphStyle}>The generalized Bondi-Sach metric is given by</p>
      <BlockMath
        math={`g = g_{AB}(dx^A - U^A du)(dx^B - U^B du) + 2e^{2\\beta} du \\, dr + e^{2\\beta}\\frac{V}{r} du^2`}
      />
    </div>
  );
};

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = isOpen ? 'hidden' : '';
    body.classList.toggle('modal-open', isOpen);

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
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          zIndex: 9,
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
          zIndex: 1,
        },
      }}
    >
      <div>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 1
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
          In this project, we have studied the constraints on the vector field introduced in Bondi-Sach spacetime such
          that the convergence of the metric to the Minkowski metric at a large distance is preserved.
        </p>
        <CustomMathComponent />
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
          The detailed work is discussed in this <a href="your_pdf_link_here" style={{ textDecoration: 'underline' }}>PDF</a>.
        </p>
        <button
          onClick={closeModal}
          style={{
            fontSize: '60px',
            color: 'white',
            background: 'none',
            border: 'none',
            position: 'absolute',
            top: '-15px',
            right: '10px',
          }}
        >
          ☠
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;

