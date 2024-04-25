import React from 'react';

const Container = () => {
  return (
    <div style={{ border: '1px solid black', borderRadius: '5px' }}>
      <div style={{ backgroundColor: '#99ff99', padding: '20px' }}>
        {/* Content for section 1 */}
      </div>
      <div style={{ backgroundColor: '#66ff66', padding: '20px' }}>
        {/* Content for section 2 */}
      </div>
      <div style={{ backgroundColor: '#33cc33', padding: '20px' }}>
        {/* Content for section 3 */}
      </div>
      <div style={{ backgroundColor: '#009900', padding: '20px' }}>
        {/* Content for section 4 */}
      </div>
      <div style={{ backgroundColor: '#006600', color: 'white', padding: '10px' }}>
        PROJECTS
      </div>
    </div>
  );
};

export default Container;
