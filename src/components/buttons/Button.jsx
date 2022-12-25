function Button(props) {
  return (
    <button className="w-full h-10 transition duration-500 bg-clr-accent hover:shadow-glow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      {props.text}
    </button>
  );
}

export default Button;