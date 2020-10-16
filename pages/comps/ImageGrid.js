import React from "react"
import {useFireStore} from "../../hooks/useFirestore";
import {motion} from 'framer-motion'

const ImageGrid = ({ setSelectedImage }) => {
  const {docs} = useFireStore("images")
  console.log(docs)

  return (
    <React.Fragment>

      <div className="img-grid">
        {docs && docs.map(doc => {
          return (
            <motion.div
              layout
              whileHover={{ opacity: 1.0 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="these aren's the droid you're looking for"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />
            </motion.div>
          )
        })}
      </div>

      <style jsx>{`
            //.img-grid {
            //  margin: 20px auto;
            //  display: grid;
            //  grid-template-columns: 1fr 1fr 1fr;
            //  grid-gap: 40px;
            //}
            //
            //.img-wrap {
            //  overflow: hidden;
            //  height: 0;
            //  padding: 50% 0;
            //  position: relative;
            //  opacity: 0.1;
            //}
            //
            //.img-wrap img {
            //min-width: 100%;
            //min-height: 100%;
            //max-width: 150%;
            //position: absolute;
            //top: 0;
            //left: 0;
            //}

    
          `}</style>
    </React.Fragment>
  )

}

export default ImageGrid
