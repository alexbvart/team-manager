import React from 'react';
import {connect} from 'react-redux'

const Player = ({ _id, urlImage, name, edit=true, addStarter, addSubstitutes, backToTheBench }) => {

    /* rebuilding of player */
    let playerSelected = {
        uuid: _id,
        urlImage: urlImage,
        name: name
    }

    return (
        <article className="player" >
            <img src={urlImage} alt={name} />
            <h3>{name} </h3>
            {(edit)
                ?   (<div>
                        <button onClick={()=>addStarter(playerSelected)}      >Starters   </button>
                        <button onClick={()=>addSubstitutes(playerSelected)}  >Substitutes</button>
                    </div>)
                :   (<div>
                        <button onClick={()=>backToTheBench(playerSelected)} >X            </button>
                    </div>)
            }
        </article>
    );
}


const mapStateToProps = (state) => ({
    player: state.player
})

const mapDispatchToProps  = (dispatch) => ({
    addStarter(playerSelected){

        dispatch({
            type: "ADD_STARTER",
            playerSelected
        })

    },

    addSubstitutes(playerSelected){
        dispatch({
            type: "ADD_SUBSTITUES",
            playerSelected
        })
    },

    backToTheBench(playerSelected){
        dispatch({
            type: "BACK_TO_THE_BENCH",
            playerSelected
        })
    }

})


export default connect(mapStateToProps, mapDispatchToProps)(Player)
