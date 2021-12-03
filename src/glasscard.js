import React from 'react';
import profile from './images/AMBER.png';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';


const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
margin: 150px;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;

`;


const StyledImg = styled.img`
    width: 300px;
    height: auto;
    border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-height: 1;
    letter-spacing: 1;
    font-family: 'VT323', monospace;

`;

const StyledH3 = styled.h3`
    line-height: 1;
    letter-spacing: 1.15;
    font-family: 'VT323', monospace;
    font-size: 20px;

`;

const Styledp = styled.p`
    line-height: 1;
    letter-spacing: 1.15;
    font-family: 'VT323', monospace;
    font-size: 20px;

`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys:  [0, 0, 1] , config:{mass: 10, tension: 200, friction: 50} }))

    return(
        <Container
        onMouseMove={({clientX: x, clientY: y}) =>(set({xys: calc(x, y)}))}             //default below
        onMouseLeave={() =>set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}

        >
            <StyledImg src={profile} />
            <StyledH1>Amber Mills</StyledH1>
            <StyledH3>Full Stack Developer<br/></StyledH3>
            <hr/>
        <Styledp>
            Fav Food: Hot Chip <br/>
            Fav Show: Cowboy Bebop<br/><br/>
            <hr/>
            <br/>"The cat does not want to be let in or let out.<br/> The cat just wants the barrier removed."

        </Styledp>

        </Container>

    );

}

export default GlassCard;