import React, { useState } from 'react';

interface AccordionProps{
    title: string;
    content: string[];
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col">
      <div className="accordion-title flex flex-row justify-between hover:cursor-pointer bg-yellow p-4 my-2" onClick={() => setIsActive(!isActive)}>
        <h3 className='font-ultra text-xl text-primary'>{title}</h3>
        <div className='font-ultra text-lg hover:-translate-y-1 text-primary'>{isActive ? '-' : '+'}</div>
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