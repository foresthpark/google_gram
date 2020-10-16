import React, {useState} from "react"
import ProgressBar from "../../pages/comps/ProgressBar";

const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg']

  const handleChange = (event) => {

    let selected = event.target.files[0]
    console.log("changedd", selected)

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("")
    } else {
      setFile(null);

      setError("Please select an image (png or jpg)")
    }
  }

  return (
    <React.Fragment>

      <form>
        <label>
          <input type="file" onChange={handleChange} accept="image/*"/>
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
      </form>

    </React.Fragment>
  )

}

export default UploadForm
