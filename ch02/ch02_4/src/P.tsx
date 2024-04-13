import type { FC, PropsWithChildren, ReactNode } from "react"

export type PProps = {
  // children?: ReactNode
}

const P: FC<PropsWithChildren<PProps>> = props => {
  // const {children} = props
  return <p {...props} />
}

export default P