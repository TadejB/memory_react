import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <BackgroundHolder />
                </div>
            </div>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
        <nav>
            <ul>
                <NavButton value="Domov" />
                <NavButton value="Nagrade" />
                <NavButton value="Pravila in pogoji nagradne igre" />
                <NavButton value="Canon.si" />
            </ul> 
        </nav>
        );
    }
}

class NavButton extends React.Component {
    render (props) {
        return (
            <li><a href="#">{this.props.value}</a></li>
        )
    }
}

class BackgroundHolder extends React.Component {
    render (props) {
        return (
            <div className="background-holder">
            
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );