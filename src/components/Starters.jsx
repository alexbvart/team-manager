import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
const Starters = ({ starters }) => {
    return (
        <section>
            <h2>Starters</h2>
            <div className="players-container">
                {
                    starters.map((starters) => (
                        <Player
                            key={starters.uuid}
                            _id={starters.uuid}
                            urlImage={starters.urlImage}
                            name={starters.name}
                            edit={false}
                        />
                    ))
                }
            </div>

        </section>
    );
}

const mapStateToProps = (state) => ({
    starters: state.starters
})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Starters)