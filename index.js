/*<div className="mui-panel">
Employee Data Entry
</div>*/

class Input extends React.Component{
    state={
        employee:"",
        designation:""
    }
    inputChangeHandleName(event){
      this.setState({employee:event.target.value});
    }
    inputChangeHandledesg(event){
      this.setState({designation:event.target.value});
    }

    render(){
        return(
               <div style={{marginTop: 5 + 'em'}}>
                <form className="mui-form">
                <legend className="mui--text-danger">Employee List</legend>
                <div className="mui-textfield">
                <input type="text" onChange={(event)=>{this.inputChangeHandleName(event)}} value={this.state.employee} placeholder="Employee Name"/>
                </div>
                <div className="mui-textfield">
                <input type="text" onChange={(event)=>{this.inputChangeHandledesg(event)}} value={this.state.designation} placeholder="Designation"/>
                </div>
                <button onClick={()=>{this.props.addList(this.state)}} className="mui-btn mui-btn--raised mui-btn--primary">save</button>
                </form>
                </div>
           );
    }
}
class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div className="mui-panel">
                <div className="mui-panel">
                    <span className="mui--text-menu" style={{margin: 2 + 'em'}}>EMPLOYEE</span>
                    <span className="mui--text-menu" style={{margin: 2 + 'em'}}>DESIGNATION</span>
                    </div>                
                {this.props.todos.map((todo,index)=>{
                  return(<div key={index} className="mui-panel">
                    <span   className="mui--text-menu" style={{margin: 2 + 'em'}}>{todo.employee.toUpperCase()}</span>
                    <span   className="mui--text-menu" style={{margin: 3+ 'em'}}>{todo.designation.toUpperCase()}</span>
                  </div>);
                })
               }
            </div>
        )
    }

}
class Wrapper extends React.Component{
    constructor(props){
        super(props);
        
    }
    state={
        todos:[{
            employee:"shikhar",
            designation:"electrical"
        }]
    }
    addToDoList(todo){
     this.setState({todos:[...this.state.todos,todo]});
    }
    render(){
        console.log(this.state);
        return(
            <div className="mui-container">
                <Input addList={(todo)=>{  
                this.addToDoList(todo)
            }}/>
            <List todos={this.state.todos}/>
            </div>
            
        );
    }
}
ReactDOM.render(<Wrapper/>,document.getElementById('root'));