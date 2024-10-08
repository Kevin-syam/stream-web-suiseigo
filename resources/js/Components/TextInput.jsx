import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(
    (
        {
            type = "text",
            className = "",
            isFocused = false,
            defaultValue,
            variant = "primary",
            placeHolder,
            isError,
            ...props
        },
        ref
    ) => {
        const input = ref ? ref : useRef();

        useEffect(() => {
            if (isFocused) {
                input.current.focus();
            }
        }, []);

        return (
            <input
                {...props}
                defaultValue={defaultValue}
                type={type}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ` +
                    className
                }
                ref={input}
            />
        );
    }
);

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;
