function Resume({textObject, pdShow, eduShow, expShow}) {

    return (
        <div>
            {pdShow ? (
                <div className="header">
                    <h1>{textObject.pd.form1}</h1>
                    <div className="header-info">
                        <h2>{textObject.pd.form2}</h2>
                        <h2>{textObject.pd.form3}</h2>
                    </div>
                </div>

            ) : (
                <div className="header">
                    <h1>John Doe</h1>
                     <div className="header-info">
                        <h2>johndoe@gmail.com</h2>
                        <h2>123-456-7890</h2>
                    </div>
                </div>
            )}
            {eduShow ? (
                <div className="eduSection">
                    <h1>Education</h1>
                    <h2>{"School Name: " + textObject.edu.form1}</h2>
                    <h2>{"Degree: " + textObject.edu.form2}</h2>
                    <h2>{"Years Studying: " + textObject.edu.form3}</h2>
                </div>

            ) : (
                <div className="eduSection">
                    <h1>Education</h1>
                    <h2>School Name: ABC College</h2>
                    <h2>Degree: Computer Science</h2>
                    <h2>Years Studying: 3</h2>
                    
                </div>
            )}
            {expShow ? (
                <div className="expSection">
                    <h1>Experience</h1>
                    <h2>{"Company Name: " + textObject.exp.form1}</h2>
                    <h2>{"Position: " + textObject.exp.form2}</h2>
                    <h2>{"Responsibilities: " + textObject.exp.form3}</h2>
                </div>

            ) : (
                <div className="expSection">
                    <h1>Experience</h1>
                    <h2>Company Name: Meta</h2>
                    <h2>Position: Intern</h2>
                    <h2>Responsibilites: Code stuff</h2>
                    
                </div>
            )}
        </div>
        
    )
}

export default Resume