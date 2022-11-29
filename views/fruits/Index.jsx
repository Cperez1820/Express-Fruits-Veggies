const React = require('react')
const DefaultLayout = require('../layout/default')

class Index extends React.Component {
    render() {
        const { fruits } = this.props
            return (
            <DefaultLayout title='Fruits Index Page'>
                <div>
                   
                    <nav>
                        <a href="/fruits/new">Create new fruit</a>
                    </nav>
                    <ul>
                    {fruits.map((fruit, i )=> {
                            return (
                            // <li key =  {i}> is making "Warning: Each child in a list should have a unique "key" prop." go away 
                             <li>
                                    The{''}
                                    <a style={{color: "red"}} href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                                    {''}
                                    is {fruit.color} <br />
                                    {
                                        fruit.readyToEat
                                        ? `It is ready to eat`
                                        : `It is not ready to eat`
                                    }
                                    <br />
                                    <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method='POST'>
                                        <input type="submit" value="DELETE" />
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </DefaultLayout>
            )
        }
    }
module.exports = Index;