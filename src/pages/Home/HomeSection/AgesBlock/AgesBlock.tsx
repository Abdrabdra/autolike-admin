import { Grid } from "@mui/material";
import { FC } from "react";
import { HorizontalBar } from "../../../../components/Charts";

import { IHomeAges } from "../HomeSection.types";

import { Styled } from "./AgesBlock.styled";

interface Props {
  agesData: IHomeAges;
  count: number;
}

const AgesBlock: FC<Props> = ({ agesData, count }) => {
  let color: number = 0;

  return (
    <Styled.Wrapper>
      {agesData && <HorizontalBar count={count} barData={agesData} />}
    </Styled.Wrapper>
  );
};

export default AgesBlock;
