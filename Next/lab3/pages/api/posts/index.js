import { posts } from "@component/data/posts";
import { v4 as uuid } from "uuid";
export default function handler(req, res) {
  if (req.method == "GET") res.status(200).json(posts);
  else if (req.method === "POST") {
    const post = req.body.post;
    const newPost = {
      id: uuid(),
      text: post,
    };
    posts.push(newPost);
    res.status(200).json(newPost);
  }
}
