function FieldPassword() {
  return (
    <div>
      <label className="block text-clr-paragraph text-md mb-2" htmlFor="password">
        Password
      </label>
      <input className="transition h-12 w-full bg-clr-input shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight border-clr-accent border-l-4 border-opacity-0 focus:outline-none focus:border-opacity-100" id="password" type="password" placeholder="******************"></input>
    </div>
  );
}

export default FieldPassword;