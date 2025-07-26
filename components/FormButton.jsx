
const FormButton = ({ ...props }) => {
    return (
        <div className="form_btn">
            <button type="submit">{props.btnText}</button>
        </div>
    )
}

export default FormButton;