const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({apiKey: '3463809dae924464aeabd0b699e36dcf'});

const checkNsfw = async (url) => {
  try {
    const response = await clarifai.models.predict(Clarifai.NSFW_MODEL, url)
    const checkNsfw = response.outputs[0].data.concepts[0].name;
    console.log("WHAT IS THE DATA?", checkNsfw)


    if (checkNsfw === "nsfw") {
      return true
    } else {
      return false
    }

  } catch (err) {
    console.log(err)
    return err
  }
}

export default checkNsfw;