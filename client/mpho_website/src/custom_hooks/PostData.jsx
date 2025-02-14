import { useState } from "react";

const usePost = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const postData = (formData) => {
        setIsPending(true);
        setError(null);
      
        fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            
          },
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((err) => {
                throw new Error(err.message || "Failed to post data");
              });
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      };
      

    return { data, isPending, error, postData }; 
};

export default usePost;
