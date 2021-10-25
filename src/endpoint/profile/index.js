import axios from "axios";
import { useEffect, useState } from "react";

const ProfileEndpoint = () => {
    
    const [books, setBooks] = useState([
    ]);
    
    const retrieveData = ()=> {
        axios
          .get(process.env.REACT_APP_API_URL+"profile")
          .then((response)=>{
            setBooks(response.data);
          })
          .catch(function(error){
            console.log(error);
          })
      };
}