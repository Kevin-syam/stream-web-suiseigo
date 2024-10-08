export default function Checkbox({
    className = "",
    checked = false,
    ...props
}) {
    return (
        <input
            {...props}
            type="checkbox"
            defaultChecked={checked}
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
        />
    );
}
