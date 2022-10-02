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
            <div className='flex flex-1 flex-col container mx-auto mt-28'>
                <PageHeader pageTitle='MySkills' />
                {/* <h2 className="text-4xl font-worksans">Experience <span><ExperienceYears /></span></h2> */}
          <main className='my-10 grid grid-cols-12'>
            <div className='col-start-1 col-end-8'>
                    <TextBody>I have been contracting as a Frontend Engineer, primarily using Javascript, since 2019. Contracting for international and national clients.</TextBody>
                    <TextBody>Of recent I’ve actively pursued more engineer based roles and my latest contract was a React Native App for Scannable.io having never worked with native coding in 3 months I managed to get both an Android and iOS version of the app into the respective stores.</TextBody>
                    <TextBody>I spent the years 2016 - 2019 working purely as a Front End Developer, in London.This was mostly developing sites for Wordpress with the occasional static site or Single Page App. I contributed to the companies base theme; implementing a base framework to make development quicker as well as developing a React app that displayed internal employee contact and holiday info.</TextBody>
                    <TextBody>Having worked both as a contractor and employee for agencies I understand how essential communication can be for both client and team. Strong communication from the start can make a job flow smoother. I am confident in adapting to different scenarios and solutions that may arise during a collaboration on a project, I tackle these with creativetey and enthusiasm and enjoy the fact that within web and software engineering there is no certain one case solution. This constant learning and evolving is one of my favourite aspects of this job.</TextBody>
                    <TextBody>I begun web development in 2013 and have always maintained self employment this has given me a strong sense of time management and negotiation and adapt to the balance of multiple tasks, jobs and clients.</TextBody>
                    <TextBody>I have worked and developed themes with the following Content Management Systems: Wordpress, SquareSpace, Shopify, Contentful, Netlify.</TextBody>
                    <TextBody>I actively subscribe to various different mediums to stay current with web and software tech and am always trying to push myself to learn new coding techniques and standards.</TextBody>
            </div>
          </main>
                <div className='pb-14'>
                  <h2>Technical</h2>
                </div>
                <div className="accordion">
                {accordionData.map(({ title, content}) => (
                <Accordion title={title} content={content} key={title} />
                ))}
            </div>
        </div>
        <Footer />
      </div>
    )
}

export default MySkills