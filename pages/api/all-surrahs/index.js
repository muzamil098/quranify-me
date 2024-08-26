async function handler(req, res) {
  const method = req.method;
  if (method === "GET") {
    const response = await fetch(`https://api.quran.com/api/v4/chapters`);
    const data = await response.json();
    res.send({ message: data });
  }
}
export default handler;
