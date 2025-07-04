import Button from "./Button.jsx"
import InputField from "./InputFields.jsx"
import "../styles/Panel.css"

function Panel({title, isActive, onShow, q1, q2, q3, onSubmit}) {
    return (
        <div className="formBtn">
            <Button
                title={title}
                isActive={isActive}
                onShow={onShow}
            >
                <InputField
                    title={title} 
                    q1={q1}
                    q2={q2}
                    q3={q3}
                    onSubmit={onSubmit}
                />

            </Button>
        </div>
    )
    
}

export default Panel