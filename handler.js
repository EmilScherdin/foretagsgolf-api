export default function handler(request, response) {
  response.status(200).json({
    body: request.body + 'hello',
    query: request.query,
    cookies: request.cookies,
  });
}