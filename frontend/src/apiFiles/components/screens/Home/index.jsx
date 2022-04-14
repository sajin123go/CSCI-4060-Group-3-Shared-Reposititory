import React from 'react';

import useFetchData from '../../../app/hooks/useAPIHook';

export default function Home() {
  const { data, loading } = useFetchData();
  console.log({ data, loading });

  /************************
  This is the shape of the data that is return from the useFetchdata() hook.
  - note that it is an array of objects [ {...}, ]


  data = [{
      "status": {
          "verified": true,
          "sentCount": 1
      },
      "_id": "5b7a02e32048fd0014e9d87a",
      "updatedAt": "2020-08-23T20:20:01.611Z",
      "createdAt": "2018-08-19T23:53:07.027Z",
      "user": "5a9ac18c7478810ea6c06381",
      "text": "Former US President Teddy Roosevelt had a Pit Bull named Pete.",
      "deleted": false,
      "type": "dog",
      "source": "user",
      "__v": 0,
      "used": false
  }]
  *************************/

  return (
    <div>
      <ul>
        {
          // We map over the array and destructure the text
          // I do this because i dont need the rest of the data
          // instead we could have used dot notation
          // data.map(d => (<li>{d.text}</li>))
          data.map(({ text, _id }) => (
            <li>{_id} - {text}</li>
          ))
        }
      </ul>
    </div>
  );
}
