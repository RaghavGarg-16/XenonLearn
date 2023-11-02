const Contact = require( "../models/contact.model" );
const savecontact = async (req, res) => {
  const { name, number, message } = req.body;
  try {
    const savedata = new Contact({
      name: name,
      number: number,
      message: message,
    });
    await savedata.save();
    res.status(200).send("success");
  } catch (err) {
    console.log("catch", err);
    res.send(err.message);
  }
};

const getContact = async (req, res) => {
  console.log("reached");
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    res.send(contacts);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { savecontact, getContact };
