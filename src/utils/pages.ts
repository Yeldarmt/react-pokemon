export const getPagesCount = (totalPages: number, limit: number) => {
  return Math.ceil(totalPages / limit);
}

export const getPagesArray = (totalPages: number) => {
  const pagesArr: number[] = [];
  for (let i=0; i<totalPages; i++) {
    pagesArr.push(i+1);
  }
  return pagesArr;
}
