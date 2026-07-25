import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",

    secondary: "bg-white text-black hover:bg-gray-100",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
