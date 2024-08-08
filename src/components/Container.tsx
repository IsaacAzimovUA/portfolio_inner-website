import { ReactElement } from 'react'

const Container = ({ children }: { children: ReactElement[] }) => {
  return (
    <div className="container">
      {children.map((child, index) => {
        return (
          <div
            key={index}
            className="container__child"
            style={{
              height: index === children.length - 1 ? 'fit-content' : 'inherit',
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default Container
