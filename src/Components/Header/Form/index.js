import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


const Input = styled.input`
  height:100%;
  margin-top:15px;
  border: 1px solid rgb(229, 232, 235);
  border-radius:4px;
  padding-left:50px;
  color:rgba(4, 17, 29, 0.75);
  font-size:14px;
  letter-spacing:1px;
  outline:${({theme}) => theme.colors.main };
  width:100%;
`

const InputContainer = styled.div`
  height:45px;
  position:relative;
  width:60%;
  @media only screen and (min-width: 920px) {
  width:80%;
};
`

const FormContainer = styled.form`
  display:flex;
  width:100%;
  @media only screen and (min-width: 920px) {
  width:40%;
};
`

const SearchIconContainer = styled.div`
  position:absolute;
  top:55%;
  left:10px;
  color:rgba(4, 17, 29, 0.75);


`

const Form = ()=>{
  //STILL NEEDS SOME GENERALIZATION BUT FOR NOW IT IS JUST A PLACE HOLDER
  return(
      <FormContainer>
        <InputContainer>
          <label htmlFor="searchbox" />
          <Input type="text" id="searchbox" placeholder="Search items"/>
          <SearchIconContainer>
            <SearchIcon/>
          </SearchIconContainer>
        </InputContainer>
      </FormContainer>
  )
}

export default Form;
