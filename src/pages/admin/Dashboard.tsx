import { Fragment, useState } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import { loremIpsum } from "lorem-ipsum";

import Header from "../../components/Dashboard/Header";

function createData(date: Date, rating: number, message: string) {
	return { date, rating, message };
}

function Row(props: { row: ReturnType<typeof createData> }) {
	const { row } = props;
	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell sx={{ width: 20 }}>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell size="small" sx={{ width: 20 }}>
					{row.rating === 1 ? (
						<SentimentVeryDissatisfiedIcon
							sx={{ fontSize: 50, color: "#b91c1c" }}
						/>
					) : row.rating === 2 ? (
						<SentimentDissatisfiedIcon
							sx={{ fontSize: 50, color: "#fb923c" }}
						/>
					) : row.rating === 3 ? (
                        <SentimentSatisfiedIcon
							sx={{ fontSize: 50, color: "#facc15" }}
						/>
                    ) : row.rating === 4 ? (
                        <SentimentSatisfiedAltIcon
							sx={{ fontSize: 50, color: "#65a30d" }}
						/>
                    ) : (
                        <SentimentVerySatisfiedIcon
							sx={{ fontSize: 50, color: "#16a34a" }}
						/>
                    )
                }
				</TableCell>
				<TableCell>16 April 2022; 18:30:03</TableCell>
				<TableCell>{ row.message }</TableCell>
			</TableRow>
		</Fragment>
	);
}

const rows = [
	createData(new Date(), Math.floor(Math.random() * 4) + 1, loremIpsum()),
	createData(new Date(), Math.floor(Math.random() * 4) + 1, loremIpsum()),
	createData(new Date(), Math.floor(Math.random() * 4) + 1, loremIpsum()),
	createData(new Date(), Math.floor(Math.random() * 4) + 1, loremIpsum()),
	createData(new Date(), Math.floor(Math.random() * 4) + 1, loremIpsum()),
	createData(new Date(), Math.floor(Math.random() * 4) + 1, loremIpsum()),
];

export default function Dashboard() {
	return (
		<div className="w-screen h-screen">
			<Header />
		</div>	
	);
}
