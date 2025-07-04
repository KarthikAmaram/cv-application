import "../styles/Button.css"

function Button({title, isActive, onShow, children}) {
    return (
        <div>
            {isActive ? (
                <>
                <button onClick={onShow}>{title}</button>
                {children}
                </>
            ) : (
                <button onClick={onShow}>{title}</button>
            )}
        </div>
    );
}

export default Button