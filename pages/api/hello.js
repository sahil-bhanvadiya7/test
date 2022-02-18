// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const baseUrl = "http://10.44.189.119:3000/";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    res.status(200).json(data)
    // } else if (req.method === 'POST') {

  }
}
