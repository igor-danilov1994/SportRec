import {FC} from "react";
import {PageWrapper} from "./PageWrapper";
import {CircularProgress} from "@mui/material";

interface LoadingProps {}

export const Loading: FC<LoadingProps> = () => {
  return (
      <PageWrapper>
          <CircularProgress />
      </PageWrapper>
  )
}
