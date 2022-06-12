import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import ExperienceYears from '../../components/ExperienceYears'
import TextBody from '../../components/TextBody'
import PortfolioList from '../../components/PorftolioList'

const Portfolio: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col'>
                <PageHeader pageTitle='Portfolio' />
                <h2 className="text-4xl font-ultra">Experience <span><ExperienceYears /></span></h2>
                <main>
                    <TextBody>Having worked as a Frontend developer for numerous years I have worked on 100's of websites.</TextBody>
                    <TextBody>These are websites I’ve built and worked on recently that showcase different designs, features and coding methods:</TextBody>
                    <h2 className="text-3xl font-ultra">Most Recent Projects</h2>

                    <div className='grid md:grid-cols-3'>
                        
                    </div>


                    
                </main>
                <PortfolioList />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio