import React from "react";
import styled from "styled-components";

const Status = styled.div`
  
`;

const StatusInput = styled.input`
  
`;

class ProfileStatus extends React.Component {

    state = {
        editMode: false,

    }

    switchEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <>
                {this.state.editMode ? <StatusInput value={this.props.status} onBlur={this.switchEditMode} autoFocus={true}/> :
                    <Status onClick={this.switchEditMode}>{this.props.status}</Status>}
            </>
        )
    }
};

export default ProfileStatus