import tw, { styled, css } from 'twin.macro'

export const Container = tw.div`
  rounded
  flex
  flex-col
  p-4
  gap-4
  w-full
  bg-primary
`

export const HeadingsContainer = tw.div`
  flex
  flex-col
  w-full
  pl-2
  select-none
`

export const Heading = tw.div`
  text-lg
  font-semibold
  text-primary
`

export const Subheading = tw.div`
  text-sm
  italic
  text-secondary
`

export const Line = tw.div`
  w-full
`

export const Input = styled.input(() => [
  tw`
    bg-primary
    w-full
    p-2
    rounded
  `,
  css`
    outline: solid;
    outline-color: var(--text-primary);
  `,
])
