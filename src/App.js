// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ""
    });
  };

  render() {
    const { task, tasks } = this.state;

    return(
        <div className={"col-6 mx-auto mt-5"}>
          <form onSubmit={this.onSubmitTask}>
            <div>
              <label htmlFor="taskInput">Enter task</label>
              <input
                  onChange={this.handleChange}
                  value={this.state.task}
                  type="text"
                  id={"taskInput"}
                  className={"form-control"}
              />
            </div>
            <div className={"form-group"}>
              <button type={"submit"} className={"btn btn-primary"}>
                Add Task
              </button>
            </div>
          </form>
          <Overview tasks={tasks} />
        </div>
    );
  }
}

export default App;