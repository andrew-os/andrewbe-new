import type { NextPage } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import TextBody from '../../components/TextBody'

const Podcasting: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col container mx-auto mt-28 mb-28 px-5 md:px-0'>
                <PageHeader pageTitle='Hello Podcasting' />
                <main className='my-10 md:grid md:grid-cols-12'>
                  <div className='md:col-start-1 md:col-end-8'>
                    <TextBody>Combining a love for Radio, Film and Podcast with a BSc in Audio and Acoustics, I was co-hosting and producing a weekly movie podcast while in London</TextBody>
                    <TextBody>We had hundreds of listeners globally and had a great time doing it, culminating in film festival invites.</TextBody>
                    <TextBody>Having started this from the ground up ourselves, I would like to offer help to any other small business or person looking to have a Podcast</TextBody>

                  </div>
          </main>
          <div>
            <TextBody>I can offer information and help with:</TextBody>
             <ul className='flex flex-row bg-secondary text-sm text-white justify-evenly py-6'>
                        <li>Online Hosting</li>
                        <li>Cross platform distrubtion</li>Cross platform distrubtion
                        <li>Audio Editing, Mixing and Mastering</li>
                        <li>Software needed</li>
                        <li>Equipment for any budget</li>
                        <li>Recording techniques</li>
                </ul>
          </div>
            </div>
            <Footer />
        </div>
    )
}

export default Podcasting
