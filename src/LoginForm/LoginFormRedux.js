import { reduxForm, Field } from 'redux-form';
import withLoginForm from './withLoginForm';
import withFormWrapper from './withFormWrapper';
import { validate as validateForm } from './validate';


const LoginFormRedux = reduxForm({
  form: 'login',
  enableReinitialize: false,
  validate: validateForm,
})(withLoginForm(Field));

/** @component */
export default withFormWrapper(LoginFormRedux);
