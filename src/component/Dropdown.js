// import React from "react";
// import "./Dropdown.css";
// import Home from "../routes/Home";
// import Dropselect from "./DropSelect";

// class Dropdown extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'Sort By'};
  
//       this.handleSelect = this.handleSelect.bind(this);
//     }
  
//     handleSelect(event) {
//         this.setState({value: event.target.value});
//     }

//     render() {
//       const selection = this.state.value
//       return (
//         <div>

//           <form >
//             <label>
//                 Sort by: 
//               <select value={this.state.value} onChange={this.handleSelect}>
//                   <option selected value="sortBy"></option>
//                   <option value="rating">rating</option>
//                   <option value="year">year</option>
//                   <option value="likes">likes</option>
//                   <option value="date_added">date added</option>
//               </select>
//             </label>
//           </form>
//         </div>
//       );
//     }
//   }


// export default Dropdown;