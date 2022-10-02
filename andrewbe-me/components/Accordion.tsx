import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface AccordionProps{
    title: string;
    content: string[];
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col mb-10">
      <div className="accordion-title bg-primary flex flex-row justify-between items-center py-4 px-7 hover:cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <h3 className='font-worksans text-white'>{title}</h3>
        <div className='font-worksans text-lg hover:translate-x-1'>{
          isActive ?
            (
               <div className = 'line bg-white h-1 w-6'></div>
            ) :
            (
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            )

        }</div>
      </div>
      {isActive && <ul className="accordion-content px-7 py-8 bg-brand-grey">{
        content.map((item, i) => (
            <li key={i}>{item}</li>
        ))
      }</ul>}
    </div>
  );
};

export default Accordion;