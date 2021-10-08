import { QualityFeatureOne, Header, CoreFeaturesOne, QualityFeatureTwo, CoreFeaturesTwo } from './sections'


const App = () => {
  return (
    <>
      <Header />
      <QualityFeatureOne />
      <CoreFeaturesOne />
      <QualityFeatureTwo />
      <CoreFeaturesTwo />
      <section style={{height: '100vh', backgroundColor: 'tomato'}}></section>
      {/* <section></section> */}
      {/* <section></section> */}
    </>
  )
}

export default App
