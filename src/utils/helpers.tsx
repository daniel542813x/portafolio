import useMediaQuery from "@mui/material/useMediaQuery";

export const IsMobile = () => {
	return !useMediaQuery('(min-width:900px)');
};
