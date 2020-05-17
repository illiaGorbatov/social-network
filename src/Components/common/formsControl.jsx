import React from "react";
import styled from "styled-components";

const TextareaWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
`;

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return(
        <TextareaWrapper>
            <textarea {...props} {...input}/>
            {hasError && <span>{meta.error}</span>}
        </TextareaWrapper>

    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return(
        <TextareaWrapper>
            <input {...props} {...input}/>
            {hasError && <span>{meta.error}</span>}
        </TextareaWrapper>

    )
}
