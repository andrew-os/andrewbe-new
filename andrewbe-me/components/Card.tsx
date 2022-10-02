import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface CardProps{
    title: string;
    link: string;
    content: string;
    image: string;
    tags: string[]
}

export default function Card({title, link,image, content, tags}: CardProps){
    return(

        <div className="flex px-4 pt-6 pb-3 shadow-xl relative bg-brand-grey rounded-main">
                {/* <Image src={image} alt={`${title} image`} layout="fill" objectFit='cover' /> */}
            <div className='z-30 flex flex-col'>
                        {/* <div className='flex-1'> */}
          <div className='flex flex-row'>
            <div className='w-16 h-16 relative mr-5'>
              <Image src={image} alt={`${title} image`} layout="fixed" width="64" height="57" objectFit='cover' />
            </div>
            <div className='flex flex-col'>
              <h3 className="font-worksans">{title}</h3>
              <article className='flex-1'>
                <p className="text-sm py-3">{content}</p>
              </article>
            </div>

          </div>


                        <footer className='my-2'>
                          <div className='flex flex-row items-center py-4 '>

                            <ul className="flex flex-row items-center flex-wrap flex-1">
                                {tags.map((tag) =>(
                                    <li className="text-xxs px-2 text-secondary font-semibold" key={tag}>{tag}</li>
                                ))}
                            </ul>
                            <a href={link} rel="noreferrer" target="_blank" className='self-end'>
                              <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
                            </a>
                          </div>
                        </footer>
                        {/* </div> */}
                    </div>
        </div>
    )
}