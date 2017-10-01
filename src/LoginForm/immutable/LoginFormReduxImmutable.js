import { reduxForm, Field } from 'redux-form/immutable';
import withLoginForm from '../withLoginForm';
import withFormWrapper from '../withFormWrapper';
import { validate as validateForm } from './validate';

const LoginFormRedux = reduxForm({
  form: 'login',
  enableReinitialize: false,
  validate: validateForm,
})(withLoginForm(Field));

export default withFormWrapper(LoginFormRedux);
