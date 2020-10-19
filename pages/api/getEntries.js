import { getContentfulPosts } from '../../lib/posts';

export default async function getEntries(req, res) {
  const posts = await getContentfulPosts()
  res.status(200).json(posts)
}
