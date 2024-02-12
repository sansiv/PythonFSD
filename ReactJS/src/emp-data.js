import EmpDob from "./emp-dob";
import './emp-data.css'
function EmpData(props){
    return(
        <div className='emp-data'>
            < div className="emp-details">
                <div className='emp-name'> {props.name} </div>
                <div className='emp-dob'> <EmpDob DOB={props.DOB}></EmpDob> </div>
                <div className='emp-exp'> {props.exp} </div>
            </div>    
        </div>
    )
}

export default EmpData;