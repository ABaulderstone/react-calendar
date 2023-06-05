export const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
  const chunksN = Math.floor(arr.length / chunkSize);
  const chunks = new Array(chunksN).fill(null);

  for (let i = 0, chunkI = 0; i < arr.length; i += chunkSize, ++chunkI) {
    chunks[chunkI] = arr.slice(i, i + chunkSize);
  }

  return chunks;
};
