import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsInPage from '../components/NewsInPage'

const News = () => {
  return (
    <>
    <div className="tw-shadow-lg">
      <Navbar showLinks={false} />
    </div>
    <NewsInPage />
    <Footer />
    </>
  )
}

export default News