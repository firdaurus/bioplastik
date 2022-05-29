import React from "react";
import Header from "../components/Header";
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

export default function RuangEkspresi() {
	return (
		<div className="h-screen bg-primary flex flex-col">
			<Header shadow />
			<div className="w-full h-full grid place-items-center p-16 montserrat">
				<div className="flex flex-col gap-5 items-center text-white">
					<p className="font-medium text-3xl text-center">
						Ruang Ekspresi
					</p>
					<p className="font-medium text-sm text-center">
						Anda dapat memberikan pesan ataupun kesan setelah anda
						menggunakan kegiatan dalam perangkat
						pembelajaran ini.
					</p>
          <Rating
              name="highlight-selected-only size-large"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
          />
				</div>
			</div>
		</div>
	);
}
