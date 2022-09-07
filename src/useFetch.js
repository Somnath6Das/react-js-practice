import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [ data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
   

    useEffect(()=> {
        const abortCont = new AbortController();
        setTimeout(() => {fetch(url, {signal:abortCont.signal})
       .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource');
        }
        return res.json()
        }).then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
       })
       .catch(err => {
        if(err.name === 'AbortError') {
          console.log('fetch aborted');
        }else{
          setIsPending(false);
          setError(err.message);
        }
       })
       },500);
      //to stop fatch data before fetching and go to another page
       return () => abortCont.abort()
      }, [url]);

     // useEffect call when the page rerender and when not have array [].
     // [] empty array call the function once when the page first render or manually reload.
     // If put any function in this array that function only run when ever that function is called.

      return { data, isPending, error}
}

export default useFetch