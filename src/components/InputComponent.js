function InputComponent({ title, type, placeholder, value, setValue }) {
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="flex flex-col gap-3 border-b-2 border-solid border-b-gray-200 pt-2 pb-2">
            <div
                className="w-full text-orange-300"
            >
                {title}
            </div>
            <input
                className="w-full"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default InputComponent;