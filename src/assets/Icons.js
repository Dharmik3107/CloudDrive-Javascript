//iconArray Imports
import Dashboard from "./Dashboard.svg";
import Shared from "./Shared.svg";
import Star from "./Star.svg";
import Trash from "./Trash.svg";

//menuIcons Imports
import Details from "./Details.svg";
import Download from "./Download.svg";
import Rename from "./Rename.svg";
import Share from "./Share.svg";
import Remove from "./Trash.svg";

const iconArray = [
	{
		icon: Dashboard,
		title: "My Drive",
		link: "/",
	},
	{
		icon: Shared,
		title: "Shared Files",
		link: "/shared",
	},
	{
		icon: Star,
		title: "Starred",
		link: "/starred",
	},
	{
		icon: Trash,
		title: "Trash",
		link: "/trash",
	},
];

export const menuIcons = [
	{
		icon: Share,
		title: "Share",
	},
	{
		icon: Rename,
		title: "Rename",
	},
	{
		icon: Star,
		title: "Add to Starred",
	},
	{
		icon: Details,
		title: "Details",
	},
	{
		icon: Download,
		title: "Download",
	},
	{
		icon: Remove,
		title: "Remove",
	},
];

export default iconArray;
