import React, { Component } from 'react';

//crear el context
const LaligaContext = React.createContext();
export {LaligaContext};

class LigaProvider extends Component {
    state = {
        equipos : [
          {
            nombre: 'Real Madrid',
            titulos: 35
          },
          {
            nombre : 'Barcelona',
            titulos: 25
          },
          {
            nombre: 'Atlético de Madrid',
            titulos: 10
          }
        ]
    }

    render() { 
        return (  
            <LaligaContext.Provider value={{
                state: this.state.equipos
            }}>
                {this.props.children}
            </LaligaContext.Provider>
        );
    }
}
 
export default LigaProvider;