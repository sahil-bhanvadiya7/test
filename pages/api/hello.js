// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const baseUrl = "https://a683-117-217-127-227.ngrok.io/";

export default function handler(req, res) {
  if (req.method === 'GET') {
    //   const data = req.body;
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const data = req.body.data
    const newData = {
      PK: PK,
      SK: SK,
    }
  }
}

