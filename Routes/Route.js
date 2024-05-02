const express = require('express');
const router = express.Router();
const {createBlogPost, cryptoBlogs, cricketBlogs, travelBlogs, technologyBlogs,
      scienceBlogs, healthBlogs,
      fashionBlogs, searchBlogs, deleteBlog, allBlogs } = require("../Controller/Controller");

router.post("/addblog", createBlogPost);
router.get("/getblog", allBlogs);
router.get("/cryptoblog", cryptoBlogs);
router.get("/cricketblog", cricketBlogs);
router.get("/travelblog", travelBlogs);
router.get("/technologyblog", technologyBlogs);
router.get("/scienceblog", scienceBlogs);
router.get("/healthblog", healthBlogs);
router.get("/fashionblog", fashionBlogs);
router.get("/search", searchBlogs);
router.delete("/deleteblog", deleteBlog);


module.exports = router;
