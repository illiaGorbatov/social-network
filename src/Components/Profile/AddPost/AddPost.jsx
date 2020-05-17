import React from "react";
import styled from "styled-components";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControl";

const AddPostWrapper = styled.div`
  max-width: 1260px;
  margin: 50px auto;
  border-radius: 10px;
  background-color: gold;
`;

const maxLength15 = maxLengthCreator(15);

const PostInput = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'post'} component={Textarea} validate={[requireField, maxLength15]}
                   placeholder={'Post message'} />
            <button>Add</button>
        </form>
    )
}

const ReduxPostForm = reduxForm({form: 'Post'})(PostInput)

const AddPost = (props) => {
    let addPost = (values) => {
        props.addPost(values.post);
    };

    return (
        <AddPostWrapper>
            <ReduxPostForm onSubmit={addPost}/>
        </AddPostWrapper>
    )
};

export default AddPost;