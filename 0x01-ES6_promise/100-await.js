import { uploadPhoto, createUser } from './utils'

export default async function asyncUploadUser() {
  let result = await Promise.allSettled([uploadPhoto(), createUser()]);
  if (result.length != 2) {
    return { photo: null, user: null, };
  }
  return {
    photo: result[0].value,
    user: result[1].value,
  };
}
