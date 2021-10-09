import { QualityFeatureOne, Header, CoreFeaturesOne, QualityFeatureTwo, CoreFeaturesTwo, FunctionOne, Testimonial, CoreFeaturesThree, FunctionTwo } from './sections'


const App = () => {
  return (
    <>
      <Header />
      <QualityFeatureOne />
      <CoreFeaturesOne />
      <QualityFeatureTwo />
      <CoreFeaturesTwo />
      <FunctionOne />
      <Testimonial />
      <CoreFeaturesThree />
      <FunctionTwo />
      <section style={{height: '100vh', backgroundColor: 'tomato'}}></section>
      {/* <section></section> */}
      {/* <section></section> */}
    </>
  )
}

export default App
