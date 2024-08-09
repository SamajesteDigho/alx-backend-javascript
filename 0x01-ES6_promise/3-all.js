import { uploadPhoto, createUser, } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      let [ first, second ] = value;
      ({ body, } = first);
      ({ firstName, lastName, } = second);
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
