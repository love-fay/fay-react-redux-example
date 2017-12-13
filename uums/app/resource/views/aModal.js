/**
 * Created by feichongzheng on 17/1/12.
 */
import React, {Component} from 'react';
import Modal from 'antd/lib/modal';
import 'fay-antd/modal';
import PropTypes from 'prop-types';

class AModal extends Component {

    constructor (props) {
        super(props);
        this.state = {
            width: this.props.width,
            modal: false,
            currentX: null,
            currentY: null,
            move: false,
            style: {
                top: 0,
                left: 0
            },
        };
    }

    setModal = (modal) => {
        if (modal) {
            const w = parseFloat(document.body.clientWidth);
            const h = parseFloat(document.body.clientHeight);
            let width = this.state.width;
            width = parseFloat(width ? (width.endsWith('%') ? w * parseFloat(width.replace('%'))/100 : width) : '520px');
            const left = (w > width) ? (w - width)/2 : 0;
            const top = (h > 100) ? 100 : 0;
            this.setState({
                move: false,
                modal: modal,
                newKey: Math.random(),
                style: {
                    top: top,
                    left: left,
                    margin: 0,
                },
            });
        } else {
            this.setState({
                modal: modal,
            });
        }
    };

    onMouseDown = (e) => {
        this.setState({
            currentX: e.clientX,
            currentY: e.clientY,
            move: true,
        });
    };

    onMouseMove = (e) => {
        if (this.state.move) {
            const moveX = e.clientX - this.state.currentX;
            const moveY = e.clientY - this.state.currentY;
            const top = this.state.style.top + moveY;
            const left = this.state.style.left + moveX;
            this.setState({
                currentX: e.clientX,
                currentY: e.clientY,
                style: {
                    top: top,
                    left: left,
                    margin: 0,
                },
            });
        }
    };

    onMouseUp = () => {
        this.setState({
            move: false,
        });
    };

    componentDidMount () {
        document.addEventListener('mousemove',(e)=>{this.onMouseMove(e);},false);
    };

    render () {
        return (
            <a href="javascript:void(0);" type="ghost" size="default" onClick={() => this.setModal(true)}>
                {this.props.text}
                <Modal key={this.state.newKey} title={<a onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>{this.props.title}</a>}
                       width={this.state.width}
                       visible={this.state.modal}
                       onCancel={() => this.setModal(false)}
                       footer={[]}
                       style={this.state.style}
                >
                    {
                        this.state.modal
                            ? React.cloneElement(this.props.children, {
                                setModal: this.setModal,
                            })
                            : ''
                    }
                </Modal>
            </a>
        );
    }

    componentWillUnmount () {
        document.removeEventListener('mousemove',(e)=>{this.onMouseMove(e);},false);
    }
}

AModal.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.any,
};

export default AModal;
