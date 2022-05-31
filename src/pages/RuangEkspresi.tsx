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
			<div className="w-full h-full grid place-items-center p-10 montserrat">
				<div className="flex flex-col gap-5 items-center text-white">
					<p className="font-medium text-3xl text-center">
						Ruang Ekspresi
					</p>
					<p className="font-medium text-sm text-center">
						Anda dapat memberikan pesan ataupun kesan setelah anda
						menyelesaikan kegiatan dalam perangkat
						pembelajaran ini.
					</p>
          {/* TODO: benerin size rating biar bisa gede */}
          <Rating
              name="highlight-selected-only size-large"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
          />
          <textarea 
            placeholder="Tuliskan kesan dan pesan anda disini" 
            className="placeholder:italic bg-gray-100 w-full h-48 p-3 montserrat text-gray-400 text-sm rounded-md focus:outline-none" 
          />
          <div className="flex place-items-end justify-between w-full">
            <button
              className="bg-white mt-8 mb-8 text-primary px-6 py-1 rounded-lg shadow-md"
            >
              Kembali
            </button>
            <button
              className="bg-orange-500 mt-8 mb-8 text-white px-6 py-1 rounded-lg shadow-md"
            >
              Submit
            </button>
          </div>
				</div>
			</div>
		</div>
	);
}
