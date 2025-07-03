import {useState} from 'react'

function InputField({q1, q2, q3, q4 = null}) {
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
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="q1">{q1}</label>
            <input 
                value={text.form1}
                onChange={handleForm1Change}
                id='q1'
            />
            <label for="q2">{q2}</label>
            <input 
                value={text.form1}
                onChange={handleForm1Change}
                id='q2'
            />
            <label for="q3">{q3}</label>
            <input 
                value={text.form1}
                onChange={handleForm1Change}
                id='q3'
            />
        </form>
    )
}

export default InputField