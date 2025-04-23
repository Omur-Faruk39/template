import Tesseract from "tesseract.js";

Tesseract.recognize(
  "myImage.png", // Path to the image
  "eng", // Language code
  {
    logger: (info) => console.log(info), // Log progress
  }
).then(({ data: { text } }) => {
  console.log(text); // Extracted text
});
