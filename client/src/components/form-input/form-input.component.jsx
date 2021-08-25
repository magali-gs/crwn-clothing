import {
	GroupContainer,
	FromInputContainer,
	FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<GroupContainer>
		<FromInputContainer onChange={handleChange} {...otherProps} />
		{label ? (
			<FormInputLabel
				className={
					otherProps.value.length ? "shrink" : ""}
			>
				{label}
			</FormInputLabel>
		) : null}
	</GroupContainer>
);

export default FormInput;