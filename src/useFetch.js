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

      return { data, isPending, error}
}

export default useFetch