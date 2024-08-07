import React from 'react'; 
import styled from 'styled-components';
import { getRandomArbitrary, getRandomColor } from './helpers';

const Colors = styled.div`
    background-color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    box-shadow: 10px 10px 187px 259px ${props => props.color};
    height: ${props => props.size}px;
    left: ${props => props.left}%;
    position: absolute;
    top: ${props => props.top}%;
    transition: all 3s ease-in-out;
    width: ${props => props.size}px;
`;

function GradientSpheres() {
    const randomRadius = `${getRandomArbitrary(0, 90)}% ${getRandomArbitrary(0, 90)}% ${getRandomArbitrary(0, 90)}% ${getRandomArbitrary(0, 90)}%`
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden', // Ensure no overflow causes scrollbars
        zIndex: -1, // Ensure it's behind other elements
      }}>
        {
          Array.from(Array(30).keys()).map(item => (
            <Colors
              key={item}
              color={getRandomColor()}
              left={getRandomArbitrary(0, 90)}
              top={getRandomArbitrary(0, 90)}
              size={getRandomArbitrary(80, 100)}
              borderRadius={randomRadius}
            />
          ))
        }
      </div>
    );
  }
  
  export default GradientSpheres;