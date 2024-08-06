import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      let body, firstName, lastName;
      ({ body } = value[0]);
      ({ firstName, lastName } = value[1]);
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
