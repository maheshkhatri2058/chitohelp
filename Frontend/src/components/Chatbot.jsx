// import { useState } from 'react';

// import {
//   Webchat,
//   WebchatProvider,
//   Fab,
//   getClient,
//   Configuration,
// } from '@botpress/webchat';

// const clientId = "1a03dc78-ed89-41d6-9abe-f07a6083a7e8";

// const configuration: Configuration = {
//   color: '#000',
// };

// export default function App() {
//   const client = getClient({
//     clientId,
//   });

//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);

//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <WebchatProvider client={client} configuration={configuration}>
//         <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? 'block' : 'none',
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }

// import {Route,Routes,Link} from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// export default () => {
//   return(
//     <>
   {/* <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}></Route>

   </Routes> */}
   
//     </>

//   )
  
// }
