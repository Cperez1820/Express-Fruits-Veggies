const React = require('react');
const vegetables = require('../../models2/vegetables');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create new Vegetable</a>
                </nav>
                <ul>
                    {vegetables.map((vegetable, i )=> {
                        return (
                            // <li key =  {i}> is making "Warning: Each child in a list should have a unique "key" prop." go away 
                            <li>
                                The{''}
                                <a style={{color:"lightblue"}}href={`/vegetables/${vegetable._id}`}>{vegetable.name}
                                </a>
                                {''}
                                is {vegetable.color} <br></br>
                                {vegetable.readyToEat
                                ? `It is ready to eat`
                                : `It is not ready to eat`}
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;