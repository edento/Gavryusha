import { v4 as uuidv4 } from 'uuid';

export const getNewId = (obj) => {
  let newId = uuidv4();
  while (obj[newId]) {
    newId = uuidv4();
  }
  return newId;
};
