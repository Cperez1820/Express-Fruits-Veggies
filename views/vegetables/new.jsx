const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Vegetables Page</h1>
        <nav>
            <a href="/vegetables">Home Page</a>
        </nav>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/vegetables" method="POST">
            Name: <input type="text" name="name" /> <br />
            Color: <input type="text" name="color" /> <br />
            is Ready To Eat: <input type="checkbox" name="readyToEat" /><br />
            <input type="submit" name="" value="Create Vegetables"/>
        </form>
      </div>
    )
  }
}

module.exports = New