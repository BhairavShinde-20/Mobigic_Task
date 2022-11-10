import uploadFile from "../middleware/uploads";

import express, { Request, Response } from "express";
const uploadController = express.Router();

uploadController.post("/:id", async (req, res) => {
  try {
    let imageData = await uploadFile(req, res);
    let requestData= req;
    if (requestData.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    console.log("imageData......", imageData);

    res.status(200).send({
      message: "Uploaded the file successfully: ",
    });
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 10MB!",
      });
    }
    res.status(500).send({
      message: `Could not upload the file ${err}`,
    });
  }
});

export default uploadController;
