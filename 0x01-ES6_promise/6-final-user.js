import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((value) => value.map((elt) => {
      let obj = {};
      if (elt.status === 'rejected') {
        obj.status = elt.status;
        obj.value = `Error: ${elt.reason.message}`;
      } else {
        obj = { ...elt };
      }
      return obj;
    }));
}
