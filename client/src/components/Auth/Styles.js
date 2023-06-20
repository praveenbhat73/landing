import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  paper: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
  avatar: {
    margin: '10px',
    backgroundColor: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '10px',
  },
  submit: {
    marginTop: '10px',
  },
  googleButton: {
    marginBottom: '10px',
  },
}));