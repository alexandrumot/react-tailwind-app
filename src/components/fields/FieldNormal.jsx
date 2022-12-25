function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function FieldNormal(props) {
  return (
    <div>
      <label className="block text-clr-paragraph text-md mb-2" htmlFor={props.label}>
        {capitalize(props.label)}
      </label>
      <input className="transition h-12 w-70 bg-clr-input text-sm text-white shadow appearance-none rounded w-full py-2 px-3 leading-tight border-clr-accent border-l-4 border-opacity-0 focus:border-opacity-100 focus:outline-none focus:shadow-outline" id={props.label} type="text" placeholder={"Enter your " + props.label}></input>
    </div>
    
  );
}

export default FieldNormal;