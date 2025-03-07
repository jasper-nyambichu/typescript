import  { useState } from 'react';
import { motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";

const Message = () => {
  const [count, setCount] = useState(0);

  const handle = () => {
    setCount(count + 1);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <motion.div 
        className="container text-center p-5 shadow-lg bg-white rounded-4 w-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="col">
            <motion.h1 
              className="mb-3 text-primary"
              key={count} // This ensures animation runs when count updates
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              count: {count}
            </motion.h1>
            <motion.button
              className="btn btn-primary mt-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handle}
            >
              Increment
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Message;
