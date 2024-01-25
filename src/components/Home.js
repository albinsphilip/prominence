import React from "react"
import './comp.css'
import cover from './assets/2.png'
import cover1 from './assets/1.png'
import ele from './assets/ckt.jpg'
import th from './assets/3.png'
//import one from './assets/one.png'
import two from './assets/two.png'

function Home() {
  return  <div> 
    <div style={{display: 'flex', flexDirection: 'column', padding: 0, margin: 0,position: 'relative'}}>
    <img src={ele} style={{width: '100vw', height: '110vh', objectFit: 'cover'}} alt="Logo" />
    <div className="c" style={{
        position: 'absolute',
        alignItems: 'center',
        color: 'white',
        
      }} ><h1 className="text-flicker-in-glow">PROMINENCE</h1>
      <h1 className="text-focus-in" style={  {marginLeft:'30px',marginTop: '200%'}}>
        March 21 22</h1>
</div>
<img src={cover1} style={{width: '100vw', height: '90vh', objectFit: 'cover'}} alt="Logo" />
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        
      }} >
</div>
<img src={two} style={{width: '100vw', height: '40vh', objectFit: 'cover'}} alt="Logo" />
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        
      }} >hello
</div>
<img src={th} style={{width: '100vw', height: '90vh', objectFit: 'cover'}} alt="Logo" />
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        
      }} >hello
</div>
    </div>
 
    </div>


}
export default Home;