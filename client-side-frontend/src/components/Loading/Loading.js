import React, { useContext } from "react";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import { photographyContext } from "../../App";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const Loading = () => {
  const { loading } = useContext(photographyContext);
  return (
    <div className="loading-spinner-section">
      <PulseLoader
        color={"#E5E7E2"}
        loading={loading}
        css={override}
        size={25}
      />
    </div>
  );
};

export default Loading;
