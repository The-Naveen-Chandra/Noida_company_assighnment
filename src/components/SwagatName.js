import React, { useEffect, useState } from 'react';
import './SwagatName.css'; // Don't forget to include your CSS file

export default function SwagatName(props) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const headerText = props.HeaderText; 
    const lettersArray = headerText.split('').map((letter, index) => ({
      letter,
      isVisible: false,
      delay: index * 200 // 0.2 seconds delay for each letter
    }));
    setLetters(lettersArray);
  }, []);

  useEffect(() => {
    const revealLetters = () => {
      const timerIds = letters.map((letterObj, index) => {
        return setTimeout(() => {
          setLetters(prevLetters => {
            const updatedLetters = [...prevLetters];
            updatedLetters[index].isVisible = true;
            return updatedLetters;
          });
        }, letterObj.delay);
      });
      return () => {
        timerIds.forEach(id => clearTimeout(id));
      };
    };

    const timeoutId = setTimeout(revealLetters, 0); // Immediate execution

    return () => clearTimeout(timeoutId);
  }, [letters]);

  return (
    <h1 className="welcome">
      {letters.map((letterObj, index) => (
        <span key={index} style={{ opacity: letterObj.isVisible ? 1 : 0 }}>{letterObj.letter}</span>
      ))}
    </h1>
  );
}
