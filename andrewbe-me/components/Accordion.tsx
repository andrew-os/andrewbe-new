import React, { useState } from 'react';

interface AccordionProps{
    title: string;
    content: string[];
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col mb-10">
      <div className="accordion-title bg-primary flex flex-row justify-between py-4 px-7 hover:cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <h3 className='font-worksans text-white'>{title}</h3>
        <div className='font-worksans text-lg hover:-translate-y-1'>{isActive ? '-' : '+'}</div>
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