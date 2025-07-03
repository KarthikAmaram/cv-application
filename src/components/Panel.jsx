import Button from "./Button.jsx"
import InputField from "./InputFields.jsx"

function Panel({title, isActive, onShow, q1, q2, q3}) {
    return (
        <Button
            title={title}
            isActive={isActive}
            onShow={onShow}
        >
            <InputField 
                q1={q1}
                q2={q2}
                q3={q3}
            />

        </Button>
    )
    
}

export default Panel