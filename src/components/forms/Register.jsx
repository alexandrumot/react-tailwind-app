import FieldNormal from "../fields/FieldNormal";
import FieldPassword from "../fields/FieldPassword";
import Button from "../buttons/Button";

function Register() {
  return (
    <div className="px-10 py-6 w-1/2">
      <h1 className="text-3xl text-white font-semibold mb-2">Welcome!</h1>
      <p className="text-white text-sm mb-4">Where creativity meets demand.</p>
      <div className="mb-4">
        <FieldNormal label="name"/>
      </div>
      <div className="mb-4">
        <FieldNormal label="email"/>
      </div>
      <div className="mb-4">
        <FieldPassword />
        <p className="text-clr-paragraph text-sm italic">Please choose a password.</p>
      </div>
      <Button text="Register"/>
    </div>
  );
}

export default Register;