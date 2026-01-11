import { Form } from './form-context';

export default function SignupPage() {
	const handleSignup = (values) => {
	  console.log(values); // { email: "...", password: "..." }
	};

	return (
	  <Form onSubmit={handleSignup}>
		<Form.Input name="email" />
		<Form.Input name="password" type="password" />
		<Form.Submit>Sign Up</Form.Submit>
	  </Form>
	);
  }
