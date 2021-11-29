import "./Loader.scss";

export const Loader = () => (
    <div className="loader">
        <svg className="loaderCircular" viewBox="25 25 50 50">
            <circle className="loaderPath" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
    </div>
)