import React, { Component } from 'react'

export class Dining extends Component {
    state={
        loading: true,
        employees:[],
        isOpen:false,
        empInfo:""
    }
 async componentDidMount(){
     const url='http://dummy.restapiexample.com/api/v1/employees';
     const response= await fetch(url);
     const data=await response.json();
     this.setState({loading:false,employees:data.data});
}   

onEmployeeClick(empid){
    let empInfo = "";
    this.state.employees.map(employee=>{
       if(employee.id === empid){
        empInfo = (<p>Name: {employee.employee_name}<br/> Age: {employee.employee_age}<br/> Salary: {employee.employee_salary} </p>);
       }
       return employee;
    });
    this.setState({isOpen:true,
        empInfo:empInfo
    })
}


render() {
 return (
 <div>
   <div className="contact_us_heading"><h1 id="caption">Dining</h1></div>
    {this.state.loading || !this.state.employees?(
    <div>loading.....</div>
                ):
                (
    <div className='contact'>
    <ul class="para">
    {this.state.employees.map(employee=>(
    <li style={{color:'#ffffff',fontSize:'20px'}}>
    {employee.id}
    <button style={{color:'#ffffff',fontSize:'20px'}} id='info_button' onClick={()=>{this.onEmployeeClick(employee.id)}}>
    {employee.employee_name}
    </button></li>
))}
    {this.state.isOpen? this.state.empInfo:""}
</ul>
</div>)} 
</div>
        )
    }
}

export default Dining
