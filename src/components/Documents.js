import React, { Component } from "react";

class Documents extends Component {
  render() {
    const data = [
      {
        id: 1,
        title: "name-1",
        description: "test-1",
        file_url: "http://google.com",
        updated_at: "11/11/16",
        image_url: "http://google.com"
      },
      {
        id: 2,
        title: "name-2",
        description: "test-2",
        file_url: "http://google.com",
        updated_at: "11/11/16",
        image_url: "http://google.com"
      },
      {
        id: 3,
        title: "name-3",
        description: "test-3",
        file_url: "http://google.com",
        updated_at: "11/11/16",
        image_url: "http://google.com"
      },
      {
        id: 4,
        title: "name-4",
        description: "test-4",
        file_url: "http://google.com",
        updated_at: "11/11/16",
        image_url: "http://google.com"
      },
      {
        id: 5,
        title: "name-5",
        description: "test-5",
        file_url: "http://google.com",
        updated_at: "11/11/16",
        image_url: "http://google.com"
      }
    ];

    const numbers = [1, 2, 3, 4, 5];
    const listItems = data.map(x => (
      <div>
        <h6>{x.id}</h6>
        <h1>{x.title}</h1>
        <p>
          <a href={x.file_url}> Download File </a>

          <div>{x.updated_at}</div>
          <div>{x.image_url}</div>
        </p>
        <hr />
      </div>
    ));

    // console.log(data);

    return (
      <div>
        <h3> Documents Dashboard </h3>
        {listItems}
      </div>
    );
  }
}

export default Documents;
