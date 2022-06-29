import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ExperienceYears from '../../components/ExperienceYears';
import TextBody from '../../components/TextBody';
import Accordion from '../../components/Accordion';
import { accordionData } from '../../utils/content';

const MySkills: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col container mx-auto my-10'>
                <PageHeader pageTitle='MySkills' />
                {/* <h2 className="text-4xl font-ultra">Experience <span><ExperienceYears /></span></h2> */}
                <main className='pb-4 pt-10'>
                    <TextBody>I have been contracting as a Frontend Engineer, primarily using Javascript, since 2019. Contracting for international and national clients.</TextBody>
                    <TextBody>I have been actively pursuing more engineer based roles and my latest contract was a React Native App for <a href="https://scannable.io">Scannable.io</a></TextBody>
                    <TextBody>I spent the years 2016 - 2019 working purely as a Front End Developer, in London.</TextBody>
                    <TextBody>This was mostly developing sites for Wordpress with the occasional static site or Single Page App.</TextBody>
                    <TextBody>Previous to that I worked as a full stack developer.</TextBody>
                    <TextBody>I have worked and developed themes with the following Content Management Systems: Wordpress, SquareSpace, Shopify, Contentful, Netlify.</TextBody>
                    <TextBody>I actively subscribe to various different mediums to stay current with web and software tech and am always trying to push myself to learn new coding techniques and standards.</TextBody>
                </main>
                <div className='flex my-4'>
                    <TextBody>To view my portfolio </TextBody>
                    <Link href="/portfolio"><a className='underline decoration-brand-pink text-primary underline-offset-4 ml-1'>Click here</a></Link> 
                </div>
                <div className="accordion">
                {accordionData.map(({ title, content}) => (
                <Accordion title={title} content={content} key={title} />
                ))}
            </div>
            <div className='my-4'>
                <TextBody>I’m always developing, improving and keen to learn in all walks of life.
                    Right now I’m learning: C++, French, Adobe Illustrator, Networking.</TextBody>
                <TextBody>
                        I’m a hobbyist White Hat Hacker. I am familiar with Kali Linux / ParrotOS on a VM, The burp suite, Tor Browsing as well as basic Ethical hacking techniques such as SQL injection, Brute Forcing and XSS. I am actively pursuing this path, it’s so much fun!
                </TextBody>
                <TextBody>I have a level one in British Sign Language</TextBody>
            </div>
        </div>
        <Footer />
      </div>
    )
}

export default MySkills