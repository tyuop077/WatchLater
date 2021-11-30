import "./Button.scss";

export const Button = (props: {id: string, toggled: boolean}) => (
    <button className={props.toggled ? "btnActive" : "btn"} id={props.id} />
)