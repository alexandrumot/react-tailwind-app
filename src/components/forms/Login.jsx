import FieldNormal from "../fields/FieldNormal";
import FieldPassword from "../fields/FieldPassword";
import Button from "../buttons/Button";

function Login() {
  return (
    <div className="px-10 py-6 w-1/2">
      <h1 className="text-3xl text-white font-semibold mb-8">Welcome back!</h1>
      <div className="mb-4">
        <FieldNormal label="email"/>
      </div>
      <div className="mb-6">
        <FieldPassword />
      </div>
      <Button text="Log In"/>
    </div>
  );
}

export default Login;