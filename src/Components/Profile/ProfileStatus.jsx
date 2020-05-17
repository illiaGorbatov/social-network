import React from "react";
import styled from "styled-components";

const Status = styled.div`
  min-height: 30px;
  border: 2px solid black;
`;

const StatusInput = styled.input`
  
`;

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status)
            this.setState({status: this.props.status})
    }

    activateEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    deactivateEditMode = () => {
        this.setState({editMode: !this.state.editMode});
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <>
                {this.state.editMode ? <StatusInput value={this.state.status} onBlur={this.deactivateEditMode}
                                                    onChange={this.onStatusChange} autoFocus={true}/> :
                    <Status onClick={this.activateEditMode}>{this.props.status}</Status>}
            </>
        )
    }
};

export default ProfileStatus