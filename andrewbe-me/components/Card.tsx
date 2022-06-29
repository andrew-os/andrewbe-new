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

        <div className="flex px-5 py-3 shadow-xl relative justify-center">
            <div className="z-20 bg-black opacity-70 h-full w-full absolute top-0 left-0"></div>
                <Image src={image} alt={`${title} image`} layout="fill" objectFit='cover' />
                    <div className='z-30 flex flex-col'>
                        {/* <div className='flex-1'> */}
                        <header>
                            <h3 className="text-center font-ultra md:text-xl text-lg text-white">{title}</h3>
                        </header>
                        <article className='flex-1 text-center'>
                            <p className="text-center text-sm py-4 text-white">{content}</p>
                        </article>

                        <footer className='my-2'>
                        <div className='text-center py-4'>
                            <a href={link} rel="noreferrer" target="_blank" className='text-center rounded-xl border-yellow bg-yellow border px-3 py-1 text-primary w-full'>Visit</a>
                        </div>
                            <ul className="flex flex-row items-center justify-center flex-wrap">
                                {tags.map((tag) =>(
                                    <li className="text-xxs px-2 text-white" key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </footer>
                        {/* </div> */}
                    </div>
        </div>
    )
}