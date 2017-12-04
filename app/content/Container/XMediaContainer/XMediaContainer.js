import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./XMediaContainer.css";
import classnames from "classnames/bind";

import Blob from "./components/Blob";

const cx = classnames.bind(styles);

class XMediaContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    _onClickOpen = () => {
        this.setState({
            open: !this.state.open
        });
    };
    render() {
        const {open} = this.state;
        return (
            <div className={ cx("XMediaContainer", {
                     active: open
                 }) }>
              <div className={ cx("btn__icon") } onClick={ this._onClickOpen }>
                <Blob />
              </div>
              <iframe src="https://hackmd.io/CYTgLAjFBsAcC0BWAxrC8wDMAMZ4EMBTfAdg2mQCZhpNEBmEbYIA?view" frameborder="0" allowfullscreen />
            </div>
            );
    }
}

XMediaContainer.propTypes = {};

XMediaContainer.defaultProps = {};

export default XMediaContainer;
