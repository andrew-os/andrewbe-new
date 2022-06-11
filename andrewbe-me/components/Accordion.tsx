import React, { useState } from 'react';

interface AccordionProps{
    title: string;
    content: string[];
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col">
      <div className="accordion-title flex flex-row justify-between" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <ul className="accordion-content">{
        content.map((item, i) => (
            <li key={i}>{item}</li>
        )) 
      }</ul>}
    </div>
  );
};

export default Accordion;