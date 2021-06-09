import { Box } from './helper-components/helper-statistics/Box';
import { Chain } from './helper-components/helper-statistics/Chain';
import { StatisticsContainer } from './helper-components/helper-statistics/StatisticsContainer';
import { Title } from './helper-components/helper-statistics/Title';
import br from '../../images/br.svg';
import dr from '../../images/dr.svg';
import fc from '../../images/fc.svg';
import { Image } from './helper-components/helper-statistics/Image';
import { HeadDiv } from './helper-components/helper-statistics/HeadDiv';
import { ParaDiv } from './helper-components/helper-statistics/ParaDiv';
import { SubTitle } from './helper-components/helper-statistics/SubTitle';
import { CyanHorizontal } from './helper-components/helper-statistics/CyanHorizontal';

const Statistics = () => {
  return (
    <StatisticsContainer>
      <Title>Advanced Statistics</Title>
      <SubTitle>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </SubTitle>
      <Chain>
        <Box>
          <Image image={br}></Image>
          <HeadDiv>Brand Recognition</HeadDiv>
          <ParaDiv>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </ParaDiv>
        </Box>
        <Box>
          <Image image={dr}></Image>
          <HeadDiv>Detailed Records</HeadDiv>
          <ParaDiv>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </ParaDiv>
        </Box>
        <Box>
          <Image image={fc}></Image>
          <HeadDiv>Fully Customisable</HeadDiv>
          <ParaDiv>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </ParaDiv>
        </Box>
      </Chain>
      <CyanHorizontal />
      {/* <Summary>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Summary>
      <Chain>
        <Box1>
         
        </Box1>
        <Box2>
          <Image></Image>
          <HeadDiv>Detailed Records</HeadDiv>
          <ParaDiv>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </ParaDiv>
        </Box2>
        <Box3>
          <Image></Image>
          <HeadDiv>Fully Customisable</HeadDiv>
          <ParaDiv>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </ParaDiv>
        </Box3>
      </Chain> */}
    </StatisticsContainer>
  );
};

export default Statistics;
