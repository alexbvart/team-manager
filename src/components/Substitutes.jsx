import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
const Substitutes = ({ substitutes }) => {
    return (
        <section>
            <h2>Substitutes</h2>
            <div className="players-container">
                {
                    substitutes.map((substitute) => (
                        <Player
                            key={substitute.uuid}
                            _id={substitute.uuid}
                            urlImage={substitute.urlImage}
                            name={substitute.name}
                            edit={false}
                        />
                    ))
                }
            </div>

        </section>
    );
}

const mapStateToProps = (state) => ({
    substitutes: state.substitutes
})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);