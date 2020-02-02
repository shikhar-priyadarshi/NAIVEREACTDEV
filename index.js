/*<div className="mui-panel">
Employee Data Entry
</div>*/

class Input extends React.Component{
    state={
        employee:"",
        designation:"",
        mail:""
    }
    inputChangeHandleName(event){
      this.setState({employee:event.target.value});
    }
    inputChangeHandledesg(event){
      this.setState({designation:event.target.value});
    }
    inputChangeHandlemail(event){
      this.setState({mail:event.target.value});
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
                <div className="mui-textfield">
                <input type="text" onChange={(event)=>{this.inputChangeHandlemail(event)}} value={this.state.mail} placeholder="Mail-Id"/>
                </div>
                <button onClick={(e)=>{
                      this.props.addList(this.state);
                      e.preventDefault();
                      
                    }} className="mui-btn mui-btn--raised mui-btn--primary">save</button>
                </form>
                </div>
           );
    }
}
class ListItem extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
        <div>
        <span   className="mui--text-menu" style={{margin: 2 + 'em'}}>{this.props.todo.employee.toUpperCase()}</span>
        <span   className="mui--text-menu" style={{margin: 3+ 'em'}}>{this.props.todo.designation.toUpperCase()}</span>
        <span   className="mui--text-menu" style={{margin: 3+ 'em'}}>{this.props.todo.mail.toUpperCase()}</span>
        </div>
        )
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
                    <span className="mui--text-menu" style={{margin: 9 + 'em'}}>MAIL</span>
                    </div>                
                    {this.props.todos.map((todo,index)=>{
                    return(<div key={index} className="mui-panel">
                    <ListItem todo={todo}/>      
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
            designation:"Electrical Engineer",
            mail:"officialshikharid@gmail.com"
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