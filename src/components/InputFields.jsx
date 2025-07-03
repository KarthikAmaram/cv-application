import {useState} from 'react'

function InputFields({q1, q2, q3, q4 = null}) {
    const [text, setText] = useState('');
    
    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <div>
            <form>
                <label for="q1">{q1}</label>
                <input 
                    value={text}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}