import React from "react"
import RegisterForm from './RegisterForm'
import RegisterTable from './RegisterTable'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            student_list:[],
            id_counter:0
        }
    }

    componentDidMount(){
        fetch("http://localhost:3500/register", 
            {
                method:"GET",
                headers:{
                    "Accept": "application/json"
                }
            
            })

            .then(res=>{return res.json()})
            .then(res=>{
                this.setState({student_list: res ? res : []})
            })
        
    }

    handleSubmit(student){
        let request = {
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                carnet: student.carnet,
                schedule: student.schedule,
                isLate: student.isLate
            })
        }

        fetch("http://localhost:3500/register", request)
        .then(res=>{return res.json()})
        .then(res=>{
            console.log(res);
         
            let buffer_list = this.state.student_list.slice();
         
            this.setState({
            student_list: buffer_list.concat([res.register]),
            id_counter: this.state.id_counter + 1,
        })
        })

        
    }

    handleDelete(student){
        let request = {
            method: "DELETE",
            headers:{
                "Accept":"application/json",
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                _id: student._id
            })
        }

        fetch("http://localhost:3500/register", request)
        .then(res=>{return res.json()})
        .then(res=>{
            let index = this.state.student_list.findIndex(value=>{
                return value._id === student._id;
            })

            let buffer_list = this.state.student_list.slice();
            buffer_list.splice(index, 1);

            this.setState({
                student_list: buffer_list
            });
        })
        

        
    }
    
    render(){
        return (
            <div className="container" style={{"marginTop":2+"em", "marginBottom":2+"em"}}>
                <RegisterForm 
                    onSubmit = {(student)=>{
                        this.handleSubmit(student);
                    }}
                />
                <RegisterTable 
                    list={this.state.student_list}
                    onDelete={(student)=>this.handleDelete(student)}
                    />
            </div>
        );
    }
}

export default App;