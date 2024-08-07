import { uploadPhoto, createUser } from './utils'

export default async function asyncUploadUser() {
  let result = await Promise.allSettled([uploadPhoto(), createUser()]);
  for (const { status } of result) {
    if (status !== 'fulfilled') {
      return { photo: null, user: null };
    }
  }
  return {
    photo: result[0].value,
    user: result[1].value,
  };
}
