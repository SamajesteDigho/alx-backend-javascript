import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  let body, firstName, lastName;
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      ({ body } = value[0]);
      ({ firstName, lastName } = value[1]);
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
