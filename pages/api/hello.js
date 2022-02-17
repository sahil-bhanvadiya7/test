// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const baseUrl = "http://localhost:3000/";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
