const express = require('express');

const router = express.Router();

const newsletterPost = require('../models/Newsletter');


// Routes
router.get('/', (req, res) => {

    newsletterPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.summary;
    console.log('body: ',req.summary);

    const newnewsletterPost = new newsletterPost(data);

    newnewsletterPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // newsletterPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


// router.get('/name', (req, res) => {
//     const data =  {
//         username: 'peterson',
//         age: 5
//     };
//     res.json(data);
// });



module.exports = router;