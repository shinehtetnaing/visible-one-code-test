import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = ({ children }) => {
  return (
    <>
    <Header />
    <main className='mt-[-8px]'>
        {children}
    </main>
    <Footer />
    </>
  )
}

export default RootLayout