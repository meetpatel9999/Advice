import React from 'react';
import axios from "axios";
import './main.css';


class Main extends React.Component {
    state ={ advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            console.log(advice);

            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        const {advice} = this.state;
        return (
        <section>
        <div className='app'>
           
        <div className='card'>
            <h1 className='heading'>
                {advice}
            </h1>
            <button className='button' onClick={this.fetchAdvice}>
                <span>Give Me Advice!!</span>
            </button>

        </div>
        </div>
        </section>
    )
}
}

export default Main