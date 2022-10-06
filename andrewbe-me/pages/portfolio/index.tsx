import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import ExperienceYears from '../../components/ExperienceYears'
import TextBody from '../../components/TextBody'
import PortfolioList from '../../components/PorftolioList'
import RecentProjectList from '../../components/RecentProjectList'

const Portfolio: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col container mx-auto mt-28 mb-48'>
                <PageHeader pageTitle='Portfolio' />
                <main className='my-10 grid grid-cols-12'>
                    <article className='col-start-1 col-end-6'>
                        <TextBody>Having worked as a Frontend developer for numerous years I have worked on 100&apos;s of websites.</TextBody>
                        <TextBody>The main languages I use are HTML5, CSS and JavaScript. I have worked with a multitude of Content Management Systems, but predominetly Wordpress and Strapi for a headless CMS.</TextBody>
                        <TextBody>I am currently upskilling myself in UI and UX Design, using <a href="https://dribble.com/andrew-sans" rel='noreferrer' target="_blank" className='text-primary hover:text-secondary'>dribble</a> to portfolio my work.</TextBody>
              {/* https://dribbble.com/andrew-sans */}
                    </article>
                </main>
                <div className='lg:pt-28'>
                  <RecentProjectList />
                </div>
                <article className='py-4'>
                    <TextBody>Showcase of different designs, features and coding methods:</TextBody>
                </article>
                <PortfolioList />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio