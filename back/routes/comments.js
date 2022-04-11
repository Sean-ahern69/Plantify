const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const comment = require("../models/comment");
// GET (all) comments route
router.get('/', async (req, res) => {
    const comments = await comment.find();
    res.json(comments)
});
// POST new comment
router.post('/addcomment', async (req, res) => {
    const newcomment = new comment(
        req.body // what vue app sending
        // {
        //     name: 'Jason',
        //     email: 'gggddd@email.com',
        //     password: 'jjjspword'
        // }
    );
    const savedcomment = await newcomment.save()
    res.json(savedcomment)
});
// GET (single) comment by ID
router.get('/get/:id', async (req, res) => {
    const IDed_comment = await comment.findById({ _id : req.params.id });
    res.json(IDed_comment)
});
// DELETE a comment by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_comment = await comment.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_comment)
});
// UPDATE a comment by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_comment = await comment.findByIdAndUpdate(
        { _id : req.params.id }, { $set: req.body }
    );
    res.json(toUpdate_comment)
});

module.exports = router