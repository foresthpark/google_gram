import React, {useEffect} from 'react'
import useStorage from "../../hooks/useStorage";
import {motion} from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
  const {url, progress, error} = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <React.Fragment>

      <motion.div className="progress-bar"
                  initial={{width: 0}}
                  animate={{width: progress + "%"}}
      >
      </motion.div>
      { error && <div><h1>{error}</h1></div> }

      <style jsx>{`

            
    
          `}</style>

    </React.Fragment>
  )

}

export default ProgressBar
