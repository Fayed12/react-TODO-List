import "./todo.css"
import BasicTextFields from "../../components/input";
import { useState } from "react";

function TodoPage() {
    const [searchValue, setSearchValue] = useState(); 

    // function set the value of the input search
    function handleSearchInput(e) {
        setSearchValue(e.target.value)
    }

    
    return (
      <div className="tasks-content">
        <div className="header">
          <div className="title">
            <h1>My Todo</h1>
          </div>
          <div className="search">
            <BasicTextFields
              inputValue={searchValue}
              onchange={handleSearchInput}
            />
          </div>
        </div>
      </div>
    );
}

export default TodoPage;