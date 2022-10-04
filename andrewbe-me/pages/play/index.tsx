import type { NextPage } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import TextBody from '../../components/TextBody'

const Play: NextPage = () => {
    return(
      <div className='min-h-screen flex flex-col'>
        <Header />
          <div className='flex flex-1 flex-col container mx-auto mt-28 mb-48'>
            <PageHeader pageTitle='About Me' />
            <main className='my-10 grid grid-cols-12'>
            <div className='col-start-1 col-end-8'>
              <TextBody>When I’m not at a desk I like to be outside as much as possible. I love exploring the world around me, be it the city or the countryside.</TextBody>
              <TextBody>I try to travel as much as possible, I spent a few years travelling across Asia down to Australia and back through Europe. Understanding new cultures is great and my favourite thing is to try as many of the different foods as I can and to walk around local supermarkets looking at all the products I’ve never seen and heard of.</TextBody>
              <TextBody>I’m a keen Skateboarder and Surfer. Through these I have met incredible people around the world that I’m so proud to call my friends.</TextBody>
              <TextBody>I volunteer when I can. I spent two months in the West Bank of Palestine teaching children to skateboard with Skatepal. In London I was a Home Reading Volunteer with Doorstep library, this was reading books with children who's English might have been falling behind for whatever reason, because reading is great.I have a level one in British Sign Language</TextBody>
              <TextBody>I’m always developing, improving and keen to learn in all walks of life.</TextBody>
              <TextBody>Right now I’m learning: UI Design, French, Drum Rudiments.</TextBody>
              {/* <TextBody>I’m a hobbyist White Hat Hacker. I am familiar with Kali Linux / ParrotOS on a VM, The burp suite, Tor Browsing as well as basic Ethical hacking techniques.</TextBody> */}
              </div>
          </main>
        </div>
        <Footer />
      </div>
    )
}

export default Play