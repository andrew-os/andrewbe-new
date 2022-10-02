import type { NextPage } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import TextBody from '../../components/TextBody'

const Contact: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex flex-1 flex-col container mx-auto mt-28 mb-48'>
            <PageHeader pageTitle='Contact me' />
            <main>
                <TextBody>I am on my emails through the Mon - Fri week and will usually respond within 24hours.</TextBody>
                <TextBody>Its best to contact me on email.</TextBody>
                <TextBody>Email me at - <a href="mailto:andrew.sleighweb@gmail.com">andrew.sleighweb@gmail.com</a></TextBody>

            </main>

            <div className='mt-4'>
                <TextBody>Contact forms suck but much like Internet Explorer they are a necessary evil to Web Development, feel free to fill the one out below.</TextBody>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Contact