import {useState} from 'react'

function InputField({title, q1, q2, q3, onSubmit}) {
    const [text, setText] = useState({
        form1: '',
        form2: '',
        form3: '',
    });
    
    function handleForm1Change(e) {
        setText({...text, form1: e.target.value});
    }

    function handleForm2Change(e) {
        setText({...text, form2: e.target.value});
    }

    function handleForm3Change(e) {
        setText({...text, form3: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setText({form1: '', form2: '', form3: ''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="q1">{q1}</label>
            <input 
                value={text.form1}
                onChange={handleForm1Change}
                id='q1'
                required
            />
            <label for="q2">{q2}</label>
            <input 
                value={text.form2}
                onChange={handleForm2Change}
                id='q2'
                required
            />
            <label for="q3">{q3}</label>
            <input 
                value={text.form3}
                onChange={handleForm3Change}
                id='q3'
                required
            />
            <button 
            type='submit'
            onClick={() => onSubmit(title, text)}
            >
                Confirm
            </button>
        </form>
    )
}

export default InputField