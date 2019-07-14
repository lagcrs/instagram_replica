const Post = require('../models/Post');

//exportando um objeto com contem os metodos do controller
module.exports = {
    //codigos assincronos - promises
    async store(req, res){
        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();
       
        return res.json(post);
    }
};