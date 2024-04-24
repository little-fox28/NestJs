import React from "react";
import AuthLayout from "../../features/auth/AuthLayout";
import SignInFormComponent from "../../features/auth/components/SigninForm.component ";

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInFormComponent />
    </AuthLayout>
  );
};

export default SignInPage;
