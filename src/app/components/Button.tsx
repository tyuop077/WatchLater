import "./Button.scss";

export const Button = (props: {id: string, text: string, toggled: boolean, image: string}) => (
    <button className={props.toggled ? "btnActive" : "btn"} id={props.id} >
        <img src={props.image} alt={`${props.id}'s button icon`}/>
        {props.text}
    </button>
)