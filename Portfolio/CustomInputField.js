const CustomInputField = ({ label, onChanged }) => {
    return <div>
        <label htmlFor={label}>{label}</label>
        <input type="number" onChange={onChanged} id={label} />
    </div>;
}

export default CustomInputField;