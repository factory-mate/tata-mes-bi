import type { PropsWithChildren } from 'react'

import styles from './index.module.scss'

interface BlockContainerProps extends PropsWithChildren {
  className?: string
  style?: React.CSSProperties
}

export default function BlockContainer(props: BlockContainerProps) {
  const { children, className, style } = props
  return (
    <div
      className={clsx(styles.boxContainer, className)}
      style={style}
    >
      {children}
      <div className={styles.boxFooter} />
    </div>
  )
}
BlockContainer.displayName = 'BlockContainer'
