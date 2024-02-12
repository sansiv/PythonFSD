import EmpData from "./emp-data";
const employees= [
    {id: "e1", name: "Sangeeth Sivan", DOB: new Date(2001, 11, 1), exp: '4 Years'},
    {id: "e2", name: "Sindhu Sivan", DOB: new Date(1974, 4, 128), exp: '8 Years'},
    {id: "e3", name: "Sivan Venga", DOB: new Date(1968, 5, 27), exp: '12 Years'},
    {id: "e4", name: "Harikrishnan", DOB: new Date(2001, 10, 17), exp: '3 Years'}
]

function EmpDet(){
    return(
        <div>
        <h1> MY EMPLOYEE DETAILS </h1>   
        <EmpData name={employees[0].name} DOB={employees[0].DOB} exp={employees[0].exp}></EmpData>
        <EmpData name={employees[1].name} DOB={employees[1].DOB} exp={employees[1].exp}></EmpData>
        <EmpData name={employees[2].name} DOB={employees[2].DOB} exp={employees[2].exp}></EmpData>
        <EmpData name={employees[3].name} DOB={employees[3].DOB} exp={employees[3].exp}></EmpData>
        </div>
        
    )
}

export default EmpDet;