import React from 'react';
import Label from 'bootstrap-styled/lib/Label';
import Input from 'bootstrap-styled/lib/Input';
import Form from 'bootstrap-styled/lib/Form';
import FormGroup from 'bootstrap-styled/lib/Form/FormGroup';
import FormFeedback from 'bootstrap-styled/lib/Form/FormFeedback';
import { LoadingIndicator } from 'loaders';

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({
  meta: { touched, error } = {}, // eslint-disable-line react/prop-types
  input: { ...inputProps }, // eslint-disable-line react/prop-types
  ...props
}) => (
  <FormGroup color={error && 'danger'}>
    <Label>{props.label}</Label>
    <Input {...inputProps} {...props} />
    {!!(touched && error) && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

export default (Field) => {
  const LoginFormUnstyled = (props) => {
    const {
      className,
      placeHolder,
      loader = <LoadingIndicator />,
      beforeButton,
      isLoading,
      ...reduxFormProps
    } = props;
    const {
      anyTouched,
      asyncValidate,
      asyncValidating,
      blur,
      change,
      clearFields,
      clearSubmit,
      destroy,
      dirty,
      dispatch,
      success,
      error,
      handleSubmit,
      initialize,
      initialized,
      initialValues,
      invalid,
      pristine,
      reset,
      submitFailed,
      submitSucceeded,
      submitting,
      touch,
      untouch,
      valid,
      warning,
      pure,
      triggerSubmit,
      autofill,
      clearSubmitErrors,
      clearAsyncError,
      submit,
      array,
      onSubmit,
      validate,
      warn,
      onError,
      ...rest
    } = reduxFormProps;

    return (
      <Form name="login-form" className={cn('form', className)} onSubmit={handleSubmit(onSubmit)} {...rest}>
        <div className="field-wrapper">
          <Field
            name="username"
            type="text"
            label={<FormattedMessage {...messages.formUsername} />}
            placeHolder={placeHolder.username}
            disabled={isLoading}
            component={renderInput}
          />
        </div>
        <div className="field-wrapper">
          <Field
            name="password"
            type="password"
            label={<FormattedMessage {...messages.formPassword} />}
            placeHolder={placeHolder.password}
            disabled={isLoading}
            component={renderInput}
          />
        </div>
        {beforeButton}
        <div className="button-wrapper">
          <Button type="submit" disabled={isLoading || submitting} color="success">
            {<FormattedMessage {...messages.authLogin} />}
            {(isLoading || submitting) && loader}
          </Button>
        </div>
      </Form>
    );
  };
};
