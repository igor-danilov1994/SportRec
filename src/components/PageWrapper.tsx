import {FC, ReactNode} from "react";
import {Container} from "@mui/material";

interface PageWrapperProps {
    children: ReactNode
}

export const PageWrapper: FC<PageWrapperProps> = ({children}) => {
  return (
      <Container maxWidth="md" sx={{ py: 4, pt: 10  }}>
          {children}
      </Container>
  )
}
