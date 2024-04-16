import { useEffect, useState } from "react"

function useRandomJoke(firstname, lastname) {

    const [joke, setJoke] = useState('')

    useEffect(() => {
      const fetchJoke = async () => 
         await fetch(`https://api.chucknorris.io/jokes/random`)
         .then(res => res.json())
         .then(res => {
             setJoke(res.value.slice(0, res.value.length-1) + " " + firstname.toUpperCase() +" " + lastname.toUpperCase());
        });

      fetchJoke();

  }, [firstname,lastname])



  return joke;
}

export default useRandomJoke