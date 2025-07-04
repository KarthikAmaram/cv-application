import {useState} from 'react'
import Panel from "./Panel.jsx"

function Sidebar({onSubmit}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <Panel 
                title="Personal Details"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                q1="Full Name:"
                q2="Email:"
                q3="Phone Number:"
                onSubmit={onSubmit}
            />
            <Panel 
                title="Education"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                q1="School Name:"
                q2="Degree:"
                q3="Years Studying:"
                onSubmit={onSubmit}
            />
            <Panel 
                title="Experience"
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
                q1="Company Name:"
                q2="Position:"
                q3="Responsibilites:"
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Sidebar