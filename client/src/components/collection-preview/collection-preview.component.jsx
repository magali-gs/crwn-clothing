import ColletctionItem from "../collection-item/collection-item.components";
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<TitleContainer>{title.toUpperCase()}</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<ColletctionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default CollectionPreview;