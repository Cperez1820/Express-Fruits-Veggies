
// Old code 
// const React = require("react");

// class Show extends React.Component {
//     render() {
//         const fruit = this.props.fruit
//         return (

//             <div>
//                 <h1>Show Page </h1>

//                     <h2>
//                     The {fruit.name} is {fruit.color}
//                     </h2>
//                     <h3>
//                     {fruit.readyToEat? 'Its is ready to eat!': 'It is not ready to eat... Cant touch this'}
//                     </h3>
//             </div>
//         );
//     }
// }

const React = require("react");

class Show extends React.Component {
  render() {
    const {name, color, readyToEat} = this.props
    return (
      <div>
        <h1>Show Page</h1>

        <div>
          <p>The {name} is {color}.</p>
          {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
        </div> 
      </div>
    )
  }
}




// We can write javascript code within the curly brackets (ONLY WITH JSX)


module.exports = Show;