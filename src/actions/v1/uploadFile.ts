import multer from "multer";

// Configure Multer to store uploaded files in the 'uploads' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/");
  },
  filename: (req, file, cb) => {
    // Generate a unique filename
    const uniqueFilename =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname;
    cb(null, uniqueFilename);
  },
});

const uploadFile = multer({ storage: storage });

export default uploadFile;
