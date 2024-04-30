// CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CustomModal2: React.FC<CustomModalProps> = ({ isOpen, closeModal }) => {
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
          backgroundImage: 'url("/Layout/qc2.png")',
          backgroundSize: '100% 100%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1, // Adjust the zIndex as needed
        },
      }}
    >
      <div>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline', marginBottom: '20px' }}>
          Project 2
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
        In this project, we have studied the historical aspects and properties of neutrinos in the standard model of particle physics. We have also looked at some beyond standard model properties of neutrinos such as their masses and the neutrino flavour oscillation during their propagation. 
        </p>
        <div style={{ textAlign: 'center', border: '3px solid black', padding: '10px', margin: '40px' }}>
        <BlockMath math="\mathcal{L}_{\text{SM}} = \mathcal{L}_{\text{Gauge}} + \mathcal{L}_{\text{Fermion}} + \mathcal{L}_{\text{Higgs}} + \mathcal{L}_{\text{Yukawa}}" />
        
        <p style={{ marginLeft: '-70%', fontSize: '1.0rem', fontWeight: '600', marginBottom: '10px' }}>
            where,
         </p>

        <BlockMath math="\mathcal{L}_{\text{Gauge}} = -\frac{1}{4} G^a_{\mu\nu}G^{a,\mu\nu} -\frac{1}{4} B_{\mu\nu}B^{\mu\nu} -\frac{1}{4} W^i_{\mu\nu}W^{i,\mu\nu}" />
        <BlockMath math="\mathcal{L}_{\text{Fermion}} = \sum_f \bar{\psi}_f (i \gamma^\mu D_\mu) \psi_f" />
        <BlockMath math="\mathcal{L}_{\text{Higgs}} = (D^\mu \phi)^\dagger (D_\mu \phi) - V(\phi)" />
        <BlockMath math="\mathcal{L}_{\text{Yukawa}} = \sum_{f,f'} Y^{f,f'} \bar{\psi}_f \phi \psi_{f'}" />

        </div>

        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
           In SM, the only interactions that neutrinos go through are
          charged current and neutral current weak interactions given by   
        </p>
          <div style={{ textAlign: 'center', border: '3px solid black', padding: '10px', margin: '40px' }}>
        

           <BlockMath math="\mathcal{L}_{kin} = \sum_{l}\overline{\nu_{Ll}}i\gamma^{\mu}\partial_{\mu}\nu_{Ll}" />
           <BlockMath math="\mathcal{L}_{CC} = - (g/ \sqrt[]{2}) \sum_{l}\overline{\nu_{Ll}}\gamma^{\mu}l_{L}^{-}W_{\mu}^{+} + h.c." />
           <BlockMath math="\mathcal{L}_{NC} = - (g/2\cos\theta_{W})\sum_{l}\overline{\nu_{Ll}}\gamma^{\mu}\nu_{Ll}Z_{\mu}^{0}" />

        </div>
       
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>
        The experimental data about neutrinos was not in accordance with SM predictions of its properties.  After several such experiments. It was concluded that some BSM physics is required to explain the experimental signatures and resolve the discrepancies such as the solar neutrino problem.
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

export default CustomModal2;
