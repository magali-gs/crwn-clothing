import ColletctionItem from "../collection-item/collection-item.components";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<ColletctionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;