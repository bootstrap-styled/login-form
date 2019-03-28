import withFormWrapper from '../src/LoginForm/withFormWrapper';
import withLoginForm from '../src/LoginForm/withLoginForm';

global.LoginFormExample = withFormWrapper(withLoginForm());
