const React = require('react');
const vegetables = require('../../models2/vegetables');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetables, i )=> {
                        return (
                            // <li key =  {i}> is making "Warning: Each child in a list should have a unique "key" prop." go away 
                            <li key =  {i}>
                                The{''}
                                <a href={`/vegetables/${i}`}>{vegetables.name}
                                </a>
                                {''}
                                is {vegetables.color} <br></br>
                                {vegetables.readyToEat
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