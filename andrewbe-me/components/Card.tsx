import Image from 'next/image'

interface CardProps{
    title: string;
    link: string;
    content: string;
    image: string;
    tags: string[]
}

export default function Card({title, link,image, content, tags}: CardProps){
    return(

        <div className="flex flex-col justify-center px-5 py-3 shadow-xl relative">

            <div className="z-20 bg-black opacity-70 h-full w-full absolute top-0 left-0"></div>
                        <Image src={image} alt={`${title} image`} layout="fill" objectFit='cover' />
                        <div className='z-30'>

                            <h3 className="text-center font-ultra text-xl text-white">{title}</h3>
                            <p className="text-center py-4 text-white">{content}</p>
                            <div className='text-center'><a href={link} rel="noreferrer" target="_blank" className='text-center rounded-xl border-white border px-3 py-1 text-white w-full'>Visit</a></div>
                            
 
                        
                            <div>
                                <ul className="flex flex-row items-center justify-center">
                                    {tags.map((tag) =>(
                                        <li className="text-xs px-2" key={tag}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
        </div>
    )
}