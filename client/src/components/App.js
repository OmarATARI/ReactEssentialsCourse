import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";

class App extends React.Component{
    render() {
        return(
            <section id="todo">
                <ToDoList />
                <NavBar />
            </section>
        )
    }
}

export default App;