import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import AddTask from "./AddTask";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


class App extends React.Component{
    render() {
        return(
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask}/>
                        <Route path="/" component={ToDoList}/>
                    </Switch>
                </BrowserRouter>
                <NavBar />
            </section>
        )
    }
}

export default App;