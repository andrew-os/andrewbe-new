import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Success() {
  return (
     <div className='min-h-screen flex flex-col'>
        <Header />
      <div className='flex flex-1 flex-col container mx-auto mt-28 mb-48'>
        <h1>Success!</h1>
      </div>
        <Footer />
    </div>
  )
}