import React from 'react';
import SignInUp from '../../components/sign-in-up/SignInUp.component';
import { SessionContextConsumer } from '../../context/session.context';

function SignInUpPage() {
  return (
    <SessionContextConsumer>
      {({ user }) => (
        <div>
          <SignInUp user={user} />
        </div>
      )}
    </SessionContextConsumer>
  );
}

export default SignInUpPage;
