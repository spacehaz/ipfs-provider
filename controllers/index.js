require('dotenv').config()
const { PINATA_API_KEY, PINATA_SECRET_KEY } = process.env

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_KEY)

const getAuth = async () => {
  try {
    const result = await pinata.testAuthentication()
    return result
  } catch (e) {
    return false
  }
}


const addJSON = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "not valid data provided" })
  }
  const isAuthed = await getAuth()
  if (isAuthed) {
    const options = {
      pinataOptions: {
        cidVersion: 0,
      },
    };
    const result = await pinata.pinJSONToIPFS(req.body, options)
    res.send(result)
  } else {
    res.status(403).send({ message: 'forbidden' })
  }
}

module.exports = {
  addJSON
}

