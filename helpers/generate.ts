export const generateRandomString = (length: number): string => {
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result: string = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

export const generateRandomNumber = (length: number): string => {
  const characters: string = "0123456789";

  let result: string = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

/* 
  Khi trong file có 2 hàm thì chỉ dùng export 
  thôi không dùng export default được, cái này dùng cho 1 hàm trong 1 file thôi 
  không nhớ thì dùng export lun
 */
