import React, { PropTypes, Component } from 'react';
class Svg extends Component {
    static propTypes = {
        children: PropTypes.node,
        color: PropTypes.string,
        style: PropTypes.object,
        viewBox: PropTypes.string,
    };
    static defaultProps = {
        viewBox: '0 0 200 200',
    };
    render() {
        const {
            children,
            color,
            style,
            viewBox,
        } = this.props;
        const styles = Object.assign({},{
            color: color,
            height: 200,
            width: 200,
        }, style);
        return (
            <svg
                {...this.props}
                style={styles}
                viewBox={viewBox}
            >
                {children}
            </svg>
        );
    }
}
export default Svg