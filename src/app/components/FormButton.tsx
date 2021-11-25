import "./FormButton.scss";
export const FormButton = (props: {value: string, disabled?: boolean}) =>
    <div className="FormButtonLine">
        <input className="FormButton" type="submit" value={props.value} disabled={props.disabled} />
    </div>