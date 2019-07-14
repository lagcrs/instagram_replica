const Post = require('../models/Post');

//exportando um objeto com contem os metodos do controller
module.exports = {
    //codigos assincronos - promises
    async index(req, res){
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);

    },

    async store(req, res){
        const { author, place, description, hashtags} = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        })

        console.log(req.body);
        return res.json(post);
    }
};