import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assests/crown.svg";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={signOutStart}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
