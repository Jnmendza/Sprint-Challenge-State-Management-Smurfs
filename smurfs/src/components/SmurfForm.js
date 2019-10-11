import React, {useState} from "react"


const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    return (
        <div className="formCSS">
            <form>
                <input name="name" type="text" placeholder="Smurf's Name" ></input>
                <input name="age" type="text" placeholder="Smurf's Age" ></input>
                <input name="height" type="text" placeholder="Smurf's Height" ></input>
                <button type="submit" >Add Smurf</button>
            </form>
        </div>
    )
}

export default Form