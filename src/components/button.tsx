import { ButtonHTMLAttributes, ComponentPropsWithRef, forwardRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> &
    ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ ...props }, ref) => (
        <button {...props} type='button' className='btn' ref={ref} />
    )
);

Button.displayName = "Button";

export { Button };
