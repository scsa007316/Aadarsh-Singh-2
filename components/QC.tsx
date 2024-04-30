import React, { useState } from 'react';
import MyHtmlComponent from './html1';
import MyHtmlComponent2 from './html2';


const YourComponent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = (projectId: string) => {
    setSelectedProject(projectId);
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const projects = [
    { id: '1', name: 'Quantum Computation', description: 'Description of Project 1', collaborativeComponent: MyHtmlComponent },
  //  { id: '2', name: 'Machine Learning', description: 'Description of Project 2', collaborativeComponent: MyHtmlComponent2 },
    // Add more projects here
    // Example:
   // { id: '3', name: 'Data Analysis', description: 'Description of Project 3', collaborativeComponent: MyHtmlComponent },
   // { id: '4', name: 'GPU Parallel Programming', description: 'Description of Project 4', collaborativeComponent: MyHtmlComponent },
    // Add more projects as needed
   // { id: '3', name: 'Model Mathematica File', description: 'Description of Project 3', collaborativeComponent: MyHtmlComponent },
   // { id: '4', name: 'Upcoming Project', description: 'Description of Project 4', collaborativeComponent: MyHtmlComponent },
   
  ];

  const selectedProjectDetails = selectedProject ? projects.find(project => project.id === selectedProject) : null;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Project list */}
      <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: '15%', top: '30%', alignItems: 'center' }}>
        {projects.map(project => (
          <div key={project.id} onMouseEnter={() => handleMouseEnter(project.id)} onMouseLeave={handleMouseLeave} onTouchStart={() => handleMouseEnter(project.id)} onTouchEnd={handleMouseLeave} style={{ marginBottom: '20px', position: 'relative', cursor: 'pointer' }}>
            <div
              style={{
                fontSize: "20px",
                color: "white",
                fontWeight: "bold", // Added for emphasis
                display: "flex", // Added for layout customization
                justifyContent: "center", // Added for horizontal centering
                alignItems: "center", // Added for vertical centering
                transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out", // Combined transitions for smoother interaction
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement; // Type assertion
                target.style.transform = "scale(1.1)";
                target.style.background = "linear-gradient(to right, black, #ffd699, black)";
                target.style.color = "#ff9900";
              }}
              
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "scale(1)";
                target.style.background = "transparent"; // Make background transparent on leave
                target.style.color = "white"; // Restore text color to white when not hovered
              }}
            >
              {project.name}
            </div>
            <hr style={{ width: '90%', margin: '0 auto', borderTop: '1px solid white', marginBottom:'50px' }} />
          </div>
        ))}
    </div>

      {/* Pop-up window */}
      {selectedProject && selectedProjectDetails && (
        <div
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          style={{
            border: '3px solid black',
            padding: '20px',
            position: 'absolute',
            left: '40%',
            width: '800px',
            height: '400px',
            borderRadius: '15px',
            background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
            transition: 'opacity 0.5s ease-in-out',
            opacity: isTooltipVisible ? 1 : 0,
          }}
        >
           <h2
  style={{
    textAlign: 'center',
    fontSize: '24px', // Adjust the font size as needed
    fontWeight: 'bold', // Add bold font weight
    color: 'white', // Set text color to white
    padding: '5px', // Add padding for better visual appearance
    backgroundColor: 'black', // Set background color to black
    borderRadius: '5px', // Add rounded corners for the box
  }}
>
  {selectedProjectDetails.name}
</h2>

          {/* Render the collaborative component based on the selected project */}
          <div style={{ width: '100%', height: '80%', overflow: 'auto', border: '0px solid black', borderRadius: '10px', boxSizing: 'border-box' }}>
            {React.createElement(selectedProjectDetails.collaborativeComponent)}
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
