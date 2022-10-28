
interface InputProps {
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type?: string;
    name?: string;
    placeholder?: string;
    className?: string;
};


const Input = (props: InputProps) => {
    const { label, onChange, value, type, name, placeholder, className } = props;
    return (
        <div className="input">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            <input
                className={"bg-gray-800 text-gray-400 text-base rounded-lg block w-full px-5 py-1 outline-none "+ className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
    }

    export default Input;