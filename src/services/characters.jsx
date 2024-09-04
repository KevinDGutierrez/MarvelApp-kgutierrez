import CryptoJS from 'crypto-js';


export const reqCharacters = async (name = '', offset = 0) => {
  
  const timeStamp = new Date().getTime();
  const PRIVATE_API_KEY = '69458f5dfd98235e7719b7e145c3b1d56db567c4';
  const PUBLIC_API_KEY = 'e70b3b1a1f2c828c3a7828f064243f15';
  const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();

  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}&offset=${offset}`;

  if (name) {
      url += `&nameStartsWith=${name}`;
  }

  const resp = await fetch(url);
  const { data } = await resp.json();
  
  return data;
}
