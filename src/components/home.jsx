// Home.jsx
import React, { useState } from 'react';
import { Header } from './Header';
import { ProductList } from './ProductList';

const Home = ({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <div className="comment-section">
        <h2>Comentarios</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí..."
          ></textarea>
          <button type="submit">Enviar Comentario</button>
        </form>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
