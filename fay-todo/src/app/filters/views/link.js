/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="filter selected">{children}</b>
    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        )
    }
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(setFilter(ownProps.filter));
    const onClick = () => {
        dispatch(setFilter(ownProps.filter));
    };
    onClick();
    return {
        onClick: onClick
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);