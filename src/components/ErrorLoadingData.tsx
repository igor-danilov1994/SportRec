import {FC} from "react";
import {PageWrapper} from "./PageWrapper";
import {Typography} from "@mui/material";

interface ErrorLoadingDataProps {
    message: string
}

export const ErrorLoadingData: FC<ErrorLoadingDataProps> = ({message}) => {
  return (
      <PageWrapper>
          <Typography variant="h5" color="error">Error: {message}</Typography>
      </PageWrapper>
  )
}
