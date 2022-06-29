import type { NextPage } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import TextBody from '../../components/TextBody'

const Podcasting: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col container mx-auto my-10'>
                <PageHeader pageTitle='Hello Podcasting' />
                 <main className='pb-4 pt-10'>
                    <TextBody>Combining a love for Radio, Film and Podcast with a BSc in Audio and Acoustics, I was co-hosting and producing a weekly movie podcast while in London</TextBody>
                    <TextBody>We had hundreds of listeners globally and had a great time doing it, culminating in film festival invites.</TextBody>
                    <TextBody>Having started this from the ground up ourselves, I would like to offer help to any other small business or person looking to have a Podcast</TextBody>
                    <article className='my-4'>
                        <TextBody>I can offer information and help with:</TextBody>
                        <ul className='my-4'>
                            <li>Online Hosting</li>
                            <li>Cross platform distrubtion</li>Cross platform distrubtion
                            <li>Audio Editing, Mixing and Mastering</li>
                            <li>Software needed</li>
                            <li>Equipment for any budget</li>
                            <li>Recording techniques</li>
                        </ul>
                    </article>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Podcasting
