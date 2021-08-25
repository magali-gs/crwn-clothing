import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.components";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
	<DirectoryMenuContainer>
		{sections.map(({ id, ...otherSectionsProps }) => (
			<MenuItem key={id} {...otherSectionsProps} />
		))}
	</DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);