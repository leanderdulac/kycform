import { defineMessages } from 'react-intl';

export default defineMessages({
  firstName: {
    id: 'field.name.firstname',
    description: 'First Name',
    defaultMessage: 'First Name',
  },
  middleName: {
    id: 'field.name.middlename',
    description: 'Middle Name',
    defaultMessage: 'Middle Name',
  },
  lastName: {
    id: 'field.name.lastname',
    description: 'Last Name',
    defaultMessage: 'Last Name',
  },
  day: {
    id: 'field.birthdate.day',
    description: 'Day',
    defaultMessage: 'Day',
  },
  month: {
    id: 'field.birthdate.month',
    description: 'Month',
    defaultMessage: 'Month',
  },
  year: {
    id: 'field.birthdate.year',
    description: 'Year',
    defaultMessage: 'Year',
  },
  countryCode: {
    id: 'field.phonenumber.countrycode',
    description: 'Country Code',
    defaultMessage: 'Country Code',
  },
  areaCode: {
    id: 'field.phonenumber.areacode',
    description: 'Area Code',
    defaultMessage: 'Area Code',
  },
  number: {
    id: 'field.phonenumber.number',
    description: 'Phone Number',
    defaultMessage: 'Number',
  },
  address: {
    id: 'field.address.address',
    description: 'Address',
    defaultMessage: 'Street Address',
  },
  address2: {
    id: 'field.address.address2',
    description: 'Address',
    defaultMessage: 'Street Address 2',
  },
  city: {
    id: 'field.address.city',
    description: 'City',
    defaultMessage: 'City',
  },
  state: {
    id: 'field.address.state',
    description: 'State',
    defaultMessage: 'State',
  },
  zipcode: {
    id: 'field.address.zipcode',
    description: 'Zip Code',
    defaultMessage: 'Zip Code',
  },
  nationalId: {
    id: 'field.nationalid.nationalid',
    description: 'National ID',
    defaultMessage: 'National ID',
  },
  photoId: {
    id: 'field.photoid.photoid',
    description: 'Photo ID',
    defaultMessage: 'Passaport, National ID, Driver License',
  },
  photoBill: {
    id: 'field.photobill.photobill',
    description: 'Photo Bill',
    defaultMessage: 'Photo Bill',
  },
  photoSelf: {
    id: 'field.photoself.photoself',
    description: 'Photo Self',
    defaultMessage: 'Photo Self',
  },
  country: {
    id: 'field.address.country',
    description: 'Country',
    defaultMessage: 'Country',
  },
  nameGroup: {
    id: 'group.name',
    description: 'Name',
    defaultMessage: 'Name',
  },
  birthdateGroup: {
    id: 'group.birthday',
    description: 'Birth Date',
    defaultMessage: 'Birth Date',
  },
  phoneNumberGroup: {
    id: 'group.phoneNumber',
    description: 'Phone Number',
    defaultMessage: 'Phone Number',
  },
  addressGroup: {
    id: 'group.address',
    description: 'Address',
    defaultMessage: 'Address',
  },
  nationalIdGroup: {
    id: 'group.nationalid',
    description: 'National ID',
    defaultMessage: 'National ID',
  },
  photoIdGroup: {
    id: 'group.photoid',
    description: 'Photo ID',
    defaultMessage: 'Photo ID',
  },
  photoBillGroup: {
    id: 'group.photobill',
    description: 'Photo Bill',
    defaultMessage: 'Photo Bill',
  },
  photoSelfGroup: {
    id: 'group.photoself',
    description: 'Photo Self',
    defaultMessage: 'Photo Self',
  },
  signatureGroup: {
    id: 'group.signature',
    description: 'Signature',
    defaultMessage: 'Signature',
  },
  errorMissingInvalid: {
    id: 'error.missingorinvalid',
    description: 'Error Missing File or Invalid',
    defaultMessage: 'Files {name} are missing or invalid',
  },
  // Multer errors
  LIMIT_FILE_SIZE: {
    id: 'error.filesize',
    description: 'Error file size',
    defaultMessage: '{name} should be less than 10 MB',
  },
});