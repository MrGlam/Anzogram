import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion} from 'framer-motion/dist/framer-motion'
const ImageGrid = ({setSelectedImg}) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return <div className="img-grid"> {docs && docs.map(doc => (
    <motion.div className="img-wrap" layout whileHover={{opacity:1}} key={doc.id} onClick={() => setSelectedImg(doc.url)}>
      <img src={doc.url} alt="uploaded pic" />
    </motion.div>
  ))}</div>;
};

export default ImageGrid;
