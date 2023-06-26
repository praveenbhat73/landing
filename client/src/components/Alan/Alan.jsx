import {useEffect,useState}  from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

// By using useEffect Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. 
// In this effect, we set the document title, but we could also perform data fetching or call some other imperative API, directly updating DOM and timers
//by default it renders every time its updated
// useEffect(<function>, <dependency>)
const ALAN_API="66c3da80661af2d6e2b8054f8a687d072e956eca572e1d8b807a3e2338fdd0dc/stage"
const useAlan=()=>{
//   const[newsArticles,setNewsArticles] = useState([])
    useEffect(()=>{
        //this is call back function
        alanBtn({
          key:ALAN_API,
          // Responsible for handling commands sent from the Alan voice script.
          // To accompany user’s utterances with activities in the app UI, you can send commands from the voice scripts to the client app.
          // this command is passsed as destructive paramter and used in if else condition
          //if that command is mapped then that function is executed 
          //destructuring is unpacking the values that is sent in array into distinct variables -> int r= a[1]; eg
          onCommand:({ command,articles })=>{
            
            
          }
        })
        
          },[])
           //this is dependecy array at what time it has to be updated
           
           
        
}
export default useAlan;
