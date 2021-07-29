import React from 'react';

const Book = ({img, title, author}) => {

    const clickHandler = () => {
      alert('Greetings Traveler');
    };
  
    const complex = (author) => {
      console.log(author);
    };
    return (
      <article className='book' onMouseOver={() => {
        console.log(title);
      }}>
        <img src={img} alt='' />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>
          <span>Reference</span>
        </button>
        <button type="button" onClick={() => complex(author)}>
          <span>Complex</span>
        </button>
      </article>
    );
  }
export default Book;