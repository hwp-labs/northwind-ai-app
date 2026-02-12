export async function GET() {
  return Response.json({
    success: true,
    data: "Hello World",
    error: null,
  });
}
