import { QualityFeatureOne, Header, CoreFeaturesOne, QualityFeatureTwo } from './sections'


const App = () => {
  return (
    <>
      <Header />
      <QualityFeatureOne />
      <CoreFeaturesOne />
      <QualityFeatureTwo />
      <section style={{height: '100vh', backgroundColor: 'tomato'}}></section>
      {/* <section></section> */}
      {/* <section></section> */}
    </>
  )
}

export default App
