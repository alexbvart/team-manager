import React from 'react';
import {connect} from 'react-redux'

import Player from './Player';

const Players = ({players}) => {
    return (
        <section >
            <h2>Players</h2>
            <div className="players-container">
                {
                    players.map((player)=>(
                        <Player 
                            key={player.uuid}
                            _id={player.uuid}
                            urlImage={player.urlImage}
                            name ={player.name}
                        />
                    ))
                }
            </div>
        </section>
    );
}


const mapStateToProps = (state) => ({
    players: state.players
})

const mapDispatchToProps  = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Players);
/*
    connect( a, b )(c) 
    connect: función de primer orden ____ conecta el componente con el store
    a: mapState to Props _______mapea lo que hay en el estado y loconvierte en propiedades
    b: mapDispatch to Props ____mapea funciones y las convierte en propiedades
    c: component
    ___ si no se usan se pueden pasar un objeto vacio {}
*/