import React, {useState} from "react"
import {connect} from "react-redux"
import {postSmurf} from "../actions/actions"

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        console.log(newSmurf)
        props.postSmurf(newSmurf)

    }

    const handleChanges = (e) => {
        let name = e.target.name;

        setNewSmurf({ ...newSmurf, [name] : e.target.value})
    }

    return (
        <div className="formCSS">
            <form>
                <input name="name" type="text" placeholder="Smurf's Name" onChange={handleChanges}></input>
                <input name="age" type="text" placeholder="Smurf's Age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="Smurf's Height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurfs,
        error: state.err
    }
}

export default connect(mapStateToProps, {postSmurf})(Form) 
