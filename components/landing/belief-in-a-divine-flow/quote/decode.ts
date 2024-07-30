const decode = (input: string): string => {
  return Buffer.from(input, "base64").toString("ascii");
};

export default decode;
