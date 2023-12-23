import styled from "styled-components";

const DefaultStyledCard = styled.div`
	position: relative;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
`;
const StyledCard = styled(DefaultStyledCard)((props) => props.style);

const StyledCardBody = styled.div`
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1.25rem;
`;

const StyledCardTitle = styled.div`
	font-weight: 500;
	line-height: 1.2;
	font-size: 1.25rem;
	margin-bottom: 0.75rem;
`;
const StyledCardText = styled.p``;

const StyledCardImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	flex-shrink: 0;
	width: 100%;
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
`;
export {
	StyledCard,
	StyledCardImg,
	StyledCardBody,
	StyledCardTitle,
	StyledCardText,
};
