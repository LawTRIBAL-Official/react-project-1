import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

//Import js
import {data} from './Books';
import SpecificBook from './Book';

//Components starts with a capital


function Booklist() {
  return <section className='booklist'>
    {data.map((book, index) => {
      return <SpecificBook key={book.id} {...book}></SpecificBook>;
    })}
  </section>;
}



ReactDom.render(<Booklist />, document.getElementById('root')
);