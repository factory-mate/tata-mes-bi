interface TitleRowNewProps {
  title?: string
  left?: React.ReactNode
  right?: React.ReactNode
}

export default function TitleRowNew(props: TitleRowNewProps) {
  const { title, left, right } = props

  const defaultTitle = useRouteStaticData().title

  return (
    <div className="absolute top-[2.5%] w-screen">
      <div className="relative">
        <div className="absolute top-0 mx-auto w-full text-center text-4xl font-semibold">
          {title ?? defaultTitle}
        </div>
        <div className="absolute inset-y-0 left-[1%] my-auto h-fit">{left}</div>
        <div className="absolute inset-y-0 right-[1%] my-auto h-fit">{right}</div>
      </div>
    </div>
  )
}
