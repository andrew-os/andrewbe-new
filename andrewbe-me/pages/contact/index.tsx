import type { NextPage } from 'next'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MobileMenu from '../../components/MobileMenu'
import PageHeader from '../../components/PageHeader'
import TextBody from '../../components/TextBody'

const Contact: NextPage = () => {
    return(
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex flex-1 flex-col container mx-auto mt-28 mb-48 md:px-0 px-5'>
          <PageHeader pageTitle='Contact me' />
          <main className='my-10 md:grid md:grid-cols-12'>
            <div className='md:col-start-1 md:col-end-8'>
                <TextBody>I am on my emails through the Mon - Fri week and will usually respond within 24hours.</TextBody>
                <TextBody>Its best to contact me on email.</TextBody>
              <TextBody>Email me at - <a href="mailto:andrew.sleighweb@gmail.com" className='text-primary pb-1 hover:border-b-3 hover:border-primary'>andrew.sleighweb@gmail.com</a></TextBody>
              <TextBody>Contact forms are pretty impersonal but much like Internet Explorer they are a necessary evil to Web Development, feel free to fill the one out below.</TextBody>
            </div>
              <div className='mt-4 col-start-1 col-end-12'>
                <ContactForm />
              </div>

          </main>
        </div>
        <Footer />
        <MobileMenu />
      </div>
    )
}

export default Contact