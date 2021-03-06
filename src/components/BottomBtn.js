import React from "react";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const BottomBtn = ({text, colorClass, icon, onBtnClick}) => (
    <button type="button" className={`btn btn-block no-border ${colorClass} button-100x`} onClick={onBtnClick}>
        <FontAwesomeIcon className="mr-2" size="lg" title={text} icon={icon}/>&nbsp;{text}
    </button>
)

BottomBtn.propTypes = {
    text: PropTypes.string,
    colorClass: PropTypes.string,
    icon: PropTypes.element.isRequired,
    onBtnClick: PropTypes.func,
}

BottomBtn.defaultProps = {
    text: '新建'
}

export default BottomBtn
