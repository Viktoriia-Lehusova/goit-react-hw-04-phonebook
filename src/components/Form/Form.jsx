import { useState } from 'react';
import shortid from 'shortid';
import { StyledForm, StyledLabel, StyledInput, BtnAdd } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <StyledForm>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          // id={name}
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          // id={this.numberInputId}
        />
      </StyledLabel>

      <BtnAdd type="submit">Add contact</BtnAdd>
    </StyledForm>
  );
}

// export default class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   formSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <StyledForm onSubmit={this.formSubmit}>
//         <StyledLabel htmlFor={this.nameInputId}>
//           Name
//           <StyledInput
//             type="text"
//             value={this.state.name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </StyledLabel>
//         <StyledLabel htmlFor={this.numberInputId}>
//           Number
//           <StyledInput
//             type="tel"
//             value={this.state.number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//             id={this.numberInputId}
//           />
//         </StyledLabel>

//         <BtnAdd type="submit">Add contact</BtnAdd>
//       </StyledForm>
//     );
//   }
// }
