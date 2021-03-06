import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
	display: flex;
	width: 850px;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: unset;
		align-items: center;
	}

	> *:first-child {
		margin-bottom: 50px;
	}
`;