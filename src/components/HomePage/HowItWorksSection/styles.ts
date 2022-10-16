import styled from "styled-components";

export const Container = styled.div`
	margin-top: 120px;
	margin-bottom: 50px;
`;

export const SectionContainer = styled.ul`
	flex: 1;
	display: flex;
	justify-content: space-around;
	margin: 60px;
	flex-direction: column;
	align-items: center;
	margin-bottom: 0px;

	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`;

export const SectionItem = styled.li`
	width: 300px;
	height: 300px;
	border: 1px solid #ccc;
	border-radius: 10px;
	padding: 20px;
	box-sizing: border-box;
	padding-top: 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 15px;

	@media only screen and (min-width: 900px) {
		margin-bottom: 0px;
	}	
`;

export const NumberContainer = styled.div`
	width: 64px;
	height: 64px;
	background-color: #44ab70;
	border-radius: 100px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NumberText = styled.span`
	color: #ffffff;
	font-size: 1.5em;
	font-weight: bold;
`;

export const SectionBody = styled.div`
	text-align: center;
	margin-top: 15px;
`;

export const TitleBody = styled.h3`
	color: #333333;
	font-size: 1.125em;
	font-weight: 500;
`;

export const DescriptionBody = styled.p`
	margin-top: 8px;
	font-size: 0.875em;
	line-height: 18px;
	color: #999999;
`;

export const LinkBody = styled.div`
	margin-top: 15px;
`;

export const Link = styled.a`
	font-size: 0.875em;
	color: #ff902e;
`;
