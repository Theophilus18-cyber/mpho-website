import { useState } from 'react';

const usePostWithImage = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const postData = (formData) => {
    setIsPending(true);
    setError(null);
  
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Failed to post data');
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

export default usePostWithImage;