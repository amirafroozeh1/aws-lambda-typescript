
export const lambdaHandler = async (
  event: any = {}
): Promise<any> => {
  console.log('Hello World!');
  const response = JSON.stringify(event, null, 2);
  return {
    statusCode: 200,
    body: response
  }
}
