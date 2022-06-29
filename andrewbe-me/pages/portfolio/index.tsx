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
            <div className='flex flex-1 flex-col container mx-auto my-10'>
                <PageHeader pageTitle='Portfolio' />
                <h2 className="md:text-4xl text-2xl font-ultra mt-1 text-black mb-8">Experience <span><ExperienceYears /></span></h2>
                <main className='my-4'>
                    <h2 className="text-3xl font-ultra text-black">Most Recent Projects</h2>

                    <RecentProjectList />
            
                </main>
                <article className='py-4'>
                <TextBody>Having worked as a Frontend developer for numerous years I have worked on 100&apos;s of websites.</TextBody>
                    <TextBody>These are websites I’ve built and worked on recently that showcase different designs, features and coding methods:</TextBody>
                </article>
                <PortfolioList />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio