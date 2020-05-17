import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Status = styled.div`
  min-height: 30px;
  border: 2px solid black;
`;

const StatusInput = styled.input`
  
`;

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value)
    }

        return (
            <>
                {editMode ? <StatusInput value={status} onBlur={deactivateEditMode}
                                                    onChange={onStatusChange} autoFocus={true}/> :
                    <Status onClick={activateEditMode}>{props.status}</Status>}
            </>
        )
};

export default ProfileStatusWithHooks