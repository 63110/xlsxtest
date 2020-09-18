const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// create express app
const app = express();

// upload file path
const FILE_PATH = 'uploads';

// configure multer
const upload = multer({
    dest: `${FILE_PATH}/`
});

// enable CORS
app.use(cors());

// add other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// start the app 
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);
app.post('/upload/photos', upload.array('photos', 8), async (req, res) => {
    try {
        const photos = req.files;

        // check if photos are available
        if (!photos) {
            res.status(400).send({
                status: false,
                data: 'No photo is selected.'
            });
        } else {
            let data = [];

            // iterate over all photos
            photos.map(p => data.push({
                name: p.originalname,
                mimetype: p.mimetype,
                size: p.size
            }));

            // send response
            res.send({
                status: true,
                message: 'Photos are uploaded.',
                data: data
            });
        }

    } catch (err) {
        res.status(500).send(err);
    }
});