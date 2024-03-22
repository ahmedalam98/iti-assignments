import { posts } from "@component/data/posts";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const { postId } = req.query;
    const postIdx = posts.findIndex((ps) => ps.id.toString() === postId);
    posts.splice(postIdx, 1);
    console.log(postIdx);
    res.status(200).json(posts);
  } else if (req.method === "PUT") {
    const { postId } = req.query;
    const { text } = req.body;
    const postIdx = posts.findIndex((ps) => ps.id.toString() === postId);

    if (postIdx !== -1) {
      posts[postIdx] = { ...posts[postIdx], text };
      res.status(200).json(posts[postIdx]);
    }
  }
}
